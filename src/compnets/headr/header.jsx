import React from 'react';
import Logo from "../headr/logo/logo"
import "./header.css"
import Nav from './navbar/nav';
import Headerbtn from "./headerbtn/headerbtn"

const Header = () => {
  
  return (
    <div>
      <header className='header'>

        <div className='container'>
          <div className='site-header '>

            <Logo />
            <Nav />
            <Headerbtn  />
          </div>
        </div>

      </header>
    </div>
  );
};

export default Header;