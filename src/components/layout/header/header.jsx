import React from "react";
import './Header.css';

const Header = () => (
  <div className="header">
    <a href="/" className="header__menu-button">
      MenuIcon
    </a>
    <a href="/" className="header__title">
      Home
    </a>
    <a href="/bash" className="header__link">
      Bash Gen
    </a>
  </div>
);

export default Header;
