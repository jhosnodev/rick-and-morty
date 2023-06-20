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
    <div className="login___container">
      <h2>Has login para empezar</h2>
      <form className="login___form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={userData.email}
            name="email"
            onChange={handleChanges}
          />
          <span className="login___form-error">{error?.email}</span>
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChanges}
          />
          <span className="login___form-error">{error?.password}</span>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
