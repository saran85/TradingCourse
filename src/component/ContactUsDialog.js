import React from "react";
import ContactUs from "./Contact";
import { Dialog, Button, Bar } from "@ui5/webcomponents-react";

function ContactUsDialog({ dialogIsOpen, onClose, headerText }) {
  return (
    <Dialog
      headerText={headerText}
      open={dialogIsOpen}
      footer={<Bar endContent={[<Button onClick={onClose}>close</Button>]} />}
    >
      <h4 style={{ marginBottom: "0.2em" }}>
        If you have any questions about our services, please contact us:
      </h4>

      <h6 style={{ padding: "0.2em", color: "GrayText" }}>
        Email: jobslinksolution@gmail.com
      </h6>
      <h6 style={{ padding: "0.2em", color: "GrayText" }}>
        Phone: 918248873022
      </h6>
      <h6 style={{ padding: "0.2em", color: "GrayText" }}>
        Address: 2-cross St,Ramapuram, chennai-600089
      </h6>

      <div>
        <ContactUs placeholder="share your contact detail and payment id for our reference" />
      </div>
    </Dialog>
  );
}

export default ContactUsDialog;
