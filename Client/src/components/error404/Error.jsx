import React from "react";
import "./error.css";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error___container">
      <div className="error___text">
        <h1>Are you lost?</h1>
        <p>You can come back to home and rest. </p>
        <NavLink to='/home'>Take me back!</NavLink>
      </div>
    </div>
  );
};

export default Error;
