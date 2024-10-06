import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Header() {

  const handlePayment = () => {
    const options = {
      key: "https://razorpay.me/@tradingstrategy", // Enter the Key ID generated from the Razorpay Dashboard
      amount: 19900, // Amount is in paisa, so ₹199 becomes 19900
      currency: "INR",
      name: "Trading Strategy",
      description: "Online Class",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        // Handle payment success here (e.g., backend processing, updating UI)
      },
      prefill: {
        name: "Your Name", // You can prefill user's info if available
        email: "user@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="chart.png" alt="Trading Strategy Logo" width="40" />
          <span>Trading Strategy</span>
        </div>
        <div className='left-align'>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
          <div>
            <button className="Book-button" onClick={handlePayment}>Book Now</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
