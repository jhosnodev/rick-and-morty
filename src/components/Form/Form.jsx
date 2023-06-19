import React from "react";
import { useState } from "react";
import errors from "./validations";

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
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          value={userData.email}
          name="email"
          onChange={handleChanges}
        />
        <span>{error?.email}</span>
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChanges}
        />
        <span>{error?.password}</span>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
