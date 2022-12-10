import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import pokedex from '../../images/pokedex.png'

import '../../styles/login-signup.css'

import Auth from "../../utils/auth";

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
    <div className="container ">
      <div className="d-flex justify-content-center pokedex-bg">
        <div className="custom-container">
          <h4 
            style={{color:'lightblue'}}
            className="text-center welcome-trainer">
              Welcome Trainer!
          </h4>
        <form 
          autoComplete="off"
          className="login-form"
          onSubmit={handleFormSubmit}>
                <input
                  className="inputs mb-2"
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
                  className="inputs"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  autoFocus
                  autocomplete="false"
                  onFocus={e => e.currentTarget.select()}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;



  /*   <main 
      style={{backgroundImage:`url(${pokedex})`}}
      className="">
            {!data ? (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            ) : (
              <p></p>
            )}
    </main> */