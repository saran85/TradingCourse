import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024. All rights reserved.</p>
      <p>Powered by Trading Strategy <i className="fas fa-heart"></i></p>
      <div className="footer-social">
        <a href="##"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="##"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="##"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="##"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      
    </footer>
  );
}

export default Footer;
