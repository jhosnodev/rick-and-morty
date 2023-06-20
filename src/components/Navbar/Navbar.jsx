import React from "react";
import logo from "../logo.png";
import "../SearchBar/SearchBar.css";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ onSearch, logout, access }) => {
  return (
    <nav className="navbar">
      <div className="navbar___left-content">
        <Link to={"/"}>
          <img src={logo} alt="logo | Rick & Morty" className="navbar___logo" />
        </Link>

        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        {access ? (
          <button onClick={logout} className="navbar___search-random-btn">
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Navbar;
