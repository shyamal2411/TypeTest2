import React from "react";
import "./Main.css";
import hero from "./../../assets/hero.png"
const Main = () => {
  return( <div className="main-container">
    <div className="main-left">
        <h1 className="main-header">How fast are you?</h1>
        <div className="typewriter-container">
            <p>Fast</p>
            <p>Correct</p>
            <p>Quick</p>
        </div>
    </div>
    <div className="main-right">
        <img src={hero} className="hero-img" alt="hero"/>
    </div>
  </div>
  );
};

export default Main;
