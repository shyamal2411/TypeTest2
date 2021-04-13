import React from 'react'
import logo from './../../assets/logo.png'
import "./Navbar.css"
const Nav =()=>{
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
            <p className="flash-logo-text">Flash Type</p>
            </div>
            {/* Nav left complete */}
        </div>
    );
}

export default Nav;