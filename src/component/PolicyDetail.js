import React from "react";
import { Dialog, Button, Bar } from "@ui5/webcomponents-react";

function PolicyDetail({
  dialogIsOpen,
  onClose,
  headerText,
  isTermsCondition,
  isPrivacyPolicy,
  isDisclaimer,
  isRefund,
}) {
  return (
    <Dialog
      headerText={headerText}
      open={dialogIsOpen}
      footer={<Bar endContent={[<Button onClick={onClose}>close</Button>]} />}
    >
      <div className="TermsConditions">
        {isTermsCondition && (
          <>
            <strong>
              Welcome to Trading Strategy. By accessing or using our website and
              services, you agree to comply with the following terms and
              conditions:
            </strong>
            <ul>
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                The information provided on this website is for educational
                purposes only and reflects personal opinions and experiences.
              </li>
              <li>
                We are not SEBI registered, and we do not provide any buy, sell,
                or intraday trading advice.
              </li>
              <li>
                All services are provided "as is" without any guarantees or
                warranties.
              </li>
              <li>
                By purchasing our services, you agree to make a one-time payment
                of ₹199. No refunds will be issued after payment.
              </li>
              <li>
                Any disputes will be handled under the jurisdiction of Chennai, Tamil-Nadu.
              </li>
            </ul>
          </>
        )}

        {isPrivacyPolicy && (
          <>
            <strong>
              At Trading Strategy, we are committed to protecting your personal
              information. This privacy policy explains how we collect, use, and
              safeguard your data:
            </strong>
            <ul>
              <li>
                We collect your name, email, and payment details when you
                purchase our services.
              </li>
              <li>
                Your personal data will only be used to process your order and
                communicate with you about the service.
              </li>
              <li>
                We do not share your personal data with third parties except as
                required for payment processing or by law.
              </li>
              <li>
                We use industry-standard encryption to protect your payment
                information.
              </li>
            </ul>
            <h4 style={{marginTop:"1rem", marginBottom:"0.5rem"}}>Shipping Policy</h4>
            <p style={{padding:"0.3em"}}>
              As Trading Strategy provides digital services (online webinars),
              there is no shipping involved. You will receive access to the
              service upon successful payment confirmation.
            </p>
          </>
        )}
        {isDisclaimer && (
          <>
          <ul>
            <li>
              The content provided on Trading Strategy is for educational
              purposes only. We share personal knowledge and experiences related
              to trading strategies in the stock market, but this should not be
              considered financial advice.
            </li>
            
              <li>
                We are not SEBI registered, and we do not provide any buy, sell,
                or intraday trading recommendations.
              </li>
              <li>
                All decisions regarding investments, trading, and financial
                choices are the sole responsibility of the individual user.
                Please consult with a licensed financial advisor before making
                any investment decisions.
              </li>
              <li>
                Trading and investing in financial markets involve risk, and
                past performance is not indicative of future results. We do not
                guarantee any outcomes or profits based on the strategies
                discussed in our webinars.
              </li>
              <li>
              By using our services, you acknowledge and agree to the above
              statements.
            </li>
            </ul>
            
          </>
        )}
        {isRefund && (
          <>
           <p>
            All purchases made for our webinar services are final. No refunds
            will be issued once payment is completed.
              As our service involves a one-time class with instant access to
              educational content, refunds are not applicable. Please ensure you
              understand the nature of the service before making a purchase.
            </p>
          </>
        )}
      </div>
    </Dialog>
  );
}

export default PolicyDetail;
