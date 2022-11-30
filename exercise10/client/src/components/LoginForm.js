import "./LoginForm.css";
import React, { useState, useRef } from "react";

const LoginForm = ({ onSubmit }) => {
  // refs
  const usernameRef = useRef();
  const passwordRef = useRef();

  // states
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
    const formData = {
      username: usernameRef.current.value, // we are accessing the value of the input field through the ref's current instance
      password: passwordRef.current.value,
    };
    onSubmit(formData); // upon submission we are calling the onSubmit function
    console.log(formData)
  };

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      Username:
      <input
        ref={usernameRef}
        label="username"
        id="username"
        type="text"
        value={usernameValue}
        onChange={handleUsernameChange}
      />
      < br/>
      Password:
      <input
        ref={passwordRef}
        label="username"
        id="password-input"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />
      < br/>
      <button id="login-button" type="submit">
        submit
      </button>
    </form>
  );
};

export default LoginForm;