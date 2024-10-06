import React from "react";
import { handlePayment } from "./Header";

function Features() {
  return (
    <section className="features">
      <div className="feature">
        <img src="LiveTrading.png" alt="Live Trading Classes" />

        <h2>Trading Strategies</h2>
        <p>
          Discover proven trading strategies that can help you make informed
          decisions in the stock market. From technical analysis to risk
          management, our comprehensive courses cover essential techniques for
          successful trading. Enhance your profitability and minimize risks
          through expert guidance.
        </p>
        <button className="Book-button" onClick={handlePayment}>
          Get Started
        </button>
      </div>
      <div className="feature">
        <h2>Live Trading Classes</h2>
        <p>
          Join our live trading classes conducted by experienced professionals
          in the industry. Gain insights, strategies, and practical knowledge on
          how to navigate the share market effectively. Interact with
          instructors and fellow students in real-time sessions designed to
          enhance your trading skills.
        </p>
        <button className="Book-button" onClick={handlePayment}>
          Explore Classes
        </button>
        <img src="MakeMoney.png" alt="Make Money" />
      </div>
    </section>
  );
}

export default Features;
