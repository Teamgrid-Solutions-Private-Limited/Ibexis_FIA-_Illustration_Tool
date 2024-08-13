import React from 'react';
import logo from '../images/logo.png'
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#"><img src={logo} title="" alt="sorry" /></a>
      </div>
      <div className="header-right">
        <a href="#" className="btn">Login</a>
      </div>
    </header>
  );
};

export default Header;
