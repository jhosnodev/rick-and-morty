import React from "react";
import logo from "../logo.png";
import "../SearchBar/SearchBar.css";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";

const Navbar = ({ onSearch, logout, access }) => {
  const [vissibleMenu, setVissibleMenu] = useState(false);
  const handleCloseMenu = () => {
    console.log("manejando el menu close");
    setVissibleMenu(!vissibleMenu);
  };
  return (
    <nav className="navbar">
      <div className="navbar___left-content">
        <Link to={"/home"}>
          <img src={logo} alt="logo | Rick & Morty" className="navbar___logo" />
        </Link>

        <NavLink to={"/home"} className={"navbar___links"}>
          Home
        </NavLink>
        <NavLink to={"/about"} className={"navbar___links"}>
          About
        </NavLink>
        {access ? (
          <button
            onClick={logout}
            className="navbar___search-random-btn navbar___links"
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
      <SearchBar onSearch={onSearch}  className='navbar___links'/>
      <button className="navbar___search-random-btn navbar___toggle-menu-btn" onClick={handleCloseMenu}>
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="#c8df6a">
          <path
            d="M5 8H13.75M5 12H19M10.25 16L19 16"
            stroke="#c8df6a"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className={`navbar___toggle-menu-content ${vissibleMenu ? 'visible' : 'hidden'}`}>
      <SearchBar onSearch={onSearch}  className='navbar___links'/>

      <NavLink to={"/home"} className={""}>
          Home
        </NavLink>
        <NavLink to={"/about"} className={""}>
          About
        </NavLink>
        {access ? (
          <button
            onClick={logout}
            className="navbar___search-random-btn "
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
