import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function FAQ() {
  const [showAnswer, setShowAnswer] = useState(null);

  const onclick = (index) => {
    setShowAnswer(index === showAnswer ? null : index);
  };
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item" onClick={() => onclick(0)}>
        <h3>
          What is a stock market?{" "}
          <span>
            {showAnswer === 0 ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </h3>
        {showAnswer === 0 && (
          <p className="faq-item-ans">
            A marketplace where buyers and sellers trade shares of publicly
            listed companies.
          </p>
        )}
      </div>
      <div className="faq-item" onClick={() => onclick(1)}>
        <h3>
          How does trading work in the stock market?
          <span>
            {showAnswer === 1 ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </h3>
        {showAnswer === 1 && (
          <p className="faq-item-ans">
            Trading involves buying and selling stocks with the goal of making a
            profit based on price fluctuations.
          </p>
        )}
      </div>
      <div className="faq-item" onClick={() => onclick(2)}>
        <h3>
          What are common trading strategies?
          <span>
            {showAnswer === 2 ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </h3>
        {showAnswer === 2 && (
          <p className="faq-item-ans">
            Strategies like day trading, swing trading, and value investing are
            commonly used by traders.
          </p>
        )}
      </div>
      <div className="faq-item" onClick={() => onclick(3)}>
        <h3>
          Why should I consider online classes for learning trading?
          <span>
            {showAnswer === 3 ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </h3>
        {showAnswer === 3 && (
          <p className="faq-item-ans">
            Online classes provide flexibility and convenience for learning at
            your own pace from anywhere.
          </p>
        )}
      </div>
      <div className="faq-item" onClick={() => onclick(4)}>
        <h3>
          Is it safe to invest in the stock market?
          <span>
            {showAnswer === 4 ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </h3>
        {showAnswer === 4 && (
          <p className="faq-item-ans">
            While all investments carry some level of risk, understanding the
            market can help manage and reduce potential risks.
          </p>
        )}
      </div>
    </section>
  );
}

export default FAQ;
