import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import PolicyDetail from "./PolicyDetail";
import ContactUsDialog from "./ContactUsDialog"
import { createPortal } from "react-dom";

function Footer() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [headerText, setheaderText] = useState("");
  const [isTermsCondition, setIsTermsCondition] = useState(false);
  const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(false);
  const [isDisclaimer, setDisclaimer] = useState(false);
  const [isRefund, setRefund] = useState(false);

  const termsConditionsClick = () => {
    setDialogIsOpen(true);
    setheaderText("Terms and Conditions");
    setIsPrivacyPolicy(false);
    setDisclaimer(false);
    setRefund(false);
    setIsTermsCondition(true);
  };

  const privacyPolicyClick = () => {
    setDialogIsOpen(true);
    setheaderText("Privacy Policy");
    setIsTermsCondition(false);
    setDisclaimer(false);
    setRefund(false);
    setIsPrivacyPolicy(true);
  };

  const disclaimerClick = () => {
    setDialogIsOpen(true);
    setheaderText("Disclaimer");
    setIsTermsCondition(false);
    setIsPrivacyPolicy(false);
    setRefund(false);
    setDisclaimer(true);
  };

  const refundClick = () => {
    setDialogIsOpen(true);
    setheaderText("Refund and Cancellation Policy");
    setIsTermsCondition(false);
    setIsPrivacyPolicy(false);
    setDisclaimer(false);
    setRefund(true);
  };

  const contactClick=()=>{
    setheaderText("Contact Us");
    setDialogIsOpen(true);
  }
  const onClose = () => {
    setDialogIsOpen(false);
  };

  return (
    <>
      {createPortal(
        <PolicyDetail
          onClose={onClose}
          dialogIsOpen={dialogIsOpen}
          headerText={headerText}
          isTermsCondition={isTermsCondition}
          isPrivacyPolicy={isPrivacyPolicy}
          isDisclaimer={isDisclaimer}
          isRefund={isRefund}
        />,
        document.body
      )},
      {createPortal(
        <ContactUsDialog  onClose={onClose} headerText={headerText}
        dialogIsOpen={dialogIsOpen}/>,
        document.body
      )}
      ,
      <footer>
        <div className="policy-detail">
          <p onClick={termsConditionsClick}>Terms and Conditions</p>
          <p onClick={privacyPolicyClick}>Privacy Policy</p>
          <p onClick={disclaimerClick}>Disclaimer </p>
          <p onClick={refundClick}>Refund and Cancellation Policy</p>
          <p onClick={contactClick}> Contact Us </p>
        </div>
        <div className="footer-social">
          <p>&copy; 2024. All rights reserved.</p>
          <p>
            Powered by Trading Strategy <i className="fas fa-heart"></i>
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://wa.me/919487932043?text=Hello.."
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="##">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="##">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="##">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="##">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
