import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Blink from 'react-blink-text';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: 
        { ...formState },
      });
      localStorage.setItem('username', data.addUser.user.username)
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {!data ? (
        <div className="d-flex justify-content-center">
          <div className="custom-signup">
            <h4 
              style={{color:'black'}}
              className="text-center ">
            </h4>
            <div className='text-center'>
            <Blink color='gray' text='Signup' fontSize='32px' speed='5000'>
            </Blink>
            </div>
  
          <form 
            autoComplete="off"
            className="d-flex flex-column"
            onSubmit={handleFormSubmit}>
                  <input
                    className="inputs-signup mb-2"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    autoFocus
                    autocomplete="false"
                    onFocus={e => e.currentTarget.select()}
                  />
                  <input
                    className="inputs-signup mb-2"
                    placeholder="Username"
                    name="username"
                    type="username"
                    value={formState.username}
                    onChange={handleChange}
                    autoFocus
                    autocomplete="false"
                    onFocus={e => e.currentTarget.select()}
                  />
                  <input
                    className="inputs-signup mb-2"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    autocomplete="false"
                    onFocus={e => e.currentTarget.select()}
                  />
                  <button
                    className="submit-signup-btn"
                    style={{ cursor: "pointer", color: 'black', fontSize: '1.3vw' }}
                    type="submit"
                  >
                    Signup
                  </button>
            </form>
            { error && (
                <div
                  style={{color:'red', position:'absolute'}}
                  className="text-center w-25">
                  {error.message}
                </div>
              )}
          </div>
        </div>
      ) : <p>Sucess!</p>}

    </div>
  );
};

export default Signup;


