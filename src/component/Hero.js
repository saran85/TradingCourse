import React from "react";
import ContactUs from "./Contact";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-content-left">
        <h1>Learn Trading Strategies and Grow Your Money</h1>
        <p>Join Our Live Online Classes and Master the Share Market</p>
        <div><ContactUs placeholder="share your contact detail and payment id for our reference"/></div>  
        </div>
      
      <div className="hero-image">
        <img src="TradingApp.png" alt="TradingApp" />
      </div>
      </div>
    </section>
  );
}

export default Hero;
