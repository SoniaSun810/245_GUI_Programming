import "./LoginForm.css";
import React, { useState, useRef } from "react";

const LoginForm = ({ onSubmit }) => {
  // refs
  const zipRef = useRef();
  const countryRef = useRef();

  // states
  const [zipValue, setZipValue] = useState("");
  const [countryValue, setCountryValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
    const formData = {
      zip: zipRef.current.value, // we are accessing the value of the input field through the ref's current instance
      country: countryRef.current.value,
    };
    onSubmit(formData); // upon submission we are calling the onSubmit function
    console.log(formData)
  };

  const handleZipChange = (event) => {
    setZipValue(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountryValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      ZipNum:
      <input
        ref={zipRef}
        label="zip"
        id="zip-input"
        type="text"
        value={zipValue}
        onChange={handleZipChange}
      />
      < br/>
      Country:
      <input
        ref={countryRef}
        label="country"
        id="country-input"
        type="text"
        value={countryValue}
        onChange={handleCountryChange}
      />
      < br/>
      <button id="login-button" type="submit">
        submit
      </button>
    </form>
  );
};

export default LoginForm;