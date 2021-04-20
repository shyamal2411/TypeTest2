import React from "react";
import "./Main.css";
import hero from "./../../assets/hero.png";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div className="main-container">
      <div data-aos="fade-right" className="main-left">
        <h1 className="main-header">How fast are you?</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div className="main-right">
        <img data-aos="fade-left" src={hero} className="hero-img" alt="hero" />
      </div>
    </div>
  );
};

export default Main;
