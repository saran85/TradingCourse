import React from "react";
import ContactUs from "./Contact";
import AnimatedCandlestick from "./AnimatedCandlestick";

function Hero() {
  return (
    <>
    <div className="hero-content-left">
      <h1>Master the Market <span>
        Trade with a Plan</span></h1>
      <p>Join Our Live Online Classes and Master the Share Market</p>
      </div>
      <section className="hero">

        <div className="hero-content">

          <div><ContactUs placeholder="share your contact detail and payment id for our reference" /></div>


          <div className="hero-image">
            <AnimatedCandlestick />
          </div>
        </div>
      </section></>
  );
}

export default Hero;
