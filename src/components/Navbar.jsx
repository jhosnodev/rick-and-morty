import React from 'react';
import logo from './rick&morty.png';
import './SearchBar.css'

import SearchBar from './SearchBar'

const Navbar = ({onSearch}) => {
    return (
        <nav className='navbar'>
            
      <img src={logo} alt='logo | Rick & Morty'  className='navbar___logo' />
     
      
            <SearchBar onSearch={onSearch}/>
        </nav>
    );
}

export default Navbar;
