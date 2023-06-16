import React from "react";
import logo from "./rick&morty.png";
import "./SearchBar.css";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="logo | Rick & Morty" className="navbar___logo" />
    
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Navbar;
