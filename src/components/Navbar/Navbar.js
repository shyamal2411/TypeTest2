import React from "react";
import logo from "./../../assets/logo.png";
import "./Navbar.css";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text">Test Type</p>
      </div>
      {/* Nav left complete */}
      <div className="nav-right">
      <a target="_blank" 
      className="nav-link"
      href="https://www.sgprajapati.com"
      rel="noreferrer"
      >SG Prajapati</a>

      </div>
    </div>
  );
};

export default Nav;
