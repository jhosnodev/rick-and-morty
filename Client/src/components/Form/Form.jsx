import React from "react";
import { useState } from "react";
import errors from "./validations";
import "./Form.css";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState([]);

  const handleChanges = (e) => {
    setUserData({
      email: e.target.name === "email" ? e.target.value : userData.email,
      password:
        e.target.name === "password" ? e.target.value : userData.password,
    });
    const messages = errors(userData);
    setError(messages);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (error.length === 0) {
      login(userData);
    } else {
      console.log("asegurate de que los datos sean los correctos!");
    }
  };
  return (
    <main className="login___container">
      <h2>Has login para empezar</h2>
      <h5>Test</h5>
          <span >jhosno.dev@gmail.com | qwerty12</span>
      <form className="login___form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            value={userData.email}
            name="email"
            id="email"
            onChange={handleChanges}
          />
          <span className="login___form-error">{error?.email}</span>
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChanges}
          />
          <span className="login___form-error">{error?.password}</span>
        </label>
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Form;
