import React from "react";
import logo from "../rick&morty.png";
import "../SearchBar/SearchBar.css";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ onSearch, logout, access }) => {
  return (
    <nav className="navbar">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="logo | Rick & Morty" className="navbar___logo" />
        </Link>

        <Link to={"/home"}>
          <button>Home</button>
        </Link>
        {access ? <button onClick={logout}>Logout</button> : ""}
        <Link to={"/about"}>
          <button>About</button>
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Navbar;
