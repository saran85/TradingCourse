import React from 'react';
import ContactUs from './Contact'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Learn Trading Strategies and Grow Your Money</h1>
        <p>Join Our Live Online Classes and Master the Share Market</p>
       
        <ContactUs/>
         
     
      </div>
      <div className="hero-image">
      <img src="TradingApp.png" alt="TradingApp" />
      </div>
    </section>
  );
}

export default Hero;
