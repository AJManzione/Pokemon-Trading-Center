import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Typed from 'react-typed'

import '../../styles/login-signup.css'

import Auth from "../../utils/auth";


import Signup from './SignUp'

const Login = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({ variables: { ...formState } });
      Auth.login(data.loginUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-bg">
      <div className="d-flex justify-content-center pokedex-bg">
        <div className="custom-container">
          <h4 
            style={{color:'lightblue'}}
            className="text-center welcome-trainer">
              <Typed 
                strings={['Welcome Trainer!', 'Please Login or Signup Below!']}
                typeSpeed={140}
                backSpeed={70} 
                loop/>
          </h4>
        <form 
          autoComplete="off"
          className="d-flex flex-column"
          onSubmit={handleFormSubmit}>
                <input
                  className="inputs-login mb-2"
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
                  className="inputs-login"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  autocomplete="false"
                  onFocus={e => e.currentTarget.select()}
                />
                <button
                  className="submit-login-btn"
                  style={{ cursor: "pointer", color: 'lightblue', fontSize: '1.3vw' }}
                  type="submit"
                >
                  Login
                </button>
          </form>
        </div>
      </div>
      <Signup/>
    </div>

  );
};

export default Login;

