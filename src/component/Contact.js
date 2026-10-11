import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "@ui5/webcomponents-react";

export default function ContactUs({ placeholder }) {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState(""); // State to store the toast message
  const [isToastVisible, setIsToastVisible] = useState(false);
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      emailjs
        .sendForm("service_52ane6q", "template_86e1pzh", form.current, {
          publicKey: "cR2Rx2SKbfmH7s-VJ",
        })
        .then(
          () => {
            setToastMessage("Message sent successfully!");
            setIsToastVisible(true); // Show toast
            clearForm(); // Clear the form after success
          },
          (error) => {
            setToastMessage(error.text);
            setIsToastVisible(true);
          }
        );
    }
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name) newErrors.from_name = "Name is required";
    if (!formData.to_name) newErrors.to_name = "Email is required";
    else if (!emailRegex.test(formData.to_name))
      newErrors.to_name = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Clear form fields
  const clearForm = () => {
    setFormData({
      from_name: "",
      to_name: "",
      message: "",
    });
    setErrors({});
  };

  // Inline styles
  const formStyles = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #3f4072",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(155, 122, 243, 0.44)",
    backgroundColor: "#2e1c3f",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const labelStyles = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#9232e0",
    marginBottom: "5px",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    border: "1px solid #320441",
    borderRadius: "5px",
    boxSizing: "border-box",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    transition: "border-color 0.3s ease",
  };

  const errorStyles = {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  };

  const textareaStyles = {
    ...inputStyles,
    resize: "vertical",
    height: "120px",
  };

  const buttonStyles = {
    backgroundColor: " #00d6a31a",
    padding: "12px 20px",
    border: "1px solid #00d6a3",
    borderRadius: "9px",
    background: "transparent",
    color:" #50d4b5",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    alignSelf: "flex-end",
  };

  const buttonHoverStyles = {
    backgroundColor: "#152e31",
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} style={formStyles}>
        <div>
          <label style={labelStyles}>Name</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            style={inputStyles}
          />
          {errors.from_name && <p style={errorStyles}>{errors.from_name}</p>}
        </div>

        <div>
          <label style={labelStyles}>Email</label>
          <input
            type="email"
            name="to_name"
            value={formData.to_name}
            onChange={handleChange}
            style={inputStyles}
          />
          {errors.to_name && <p style={errorStyles}>{errors.to_name}</p>}
        </div>

        <div>
          <label style={labelStyles}>Message</label>
          <textarea
            placeholder={placeholder}
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyles}
          />
          {errors.message && <p style={errorStyles}>{errors.message}</p>}
        </div>

        <input
          type="submit"
          value="Send ▶"
          style={buttonStyles}
          
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyles.backgroundColor)
          }
        />
       
             </form>
      <Toast
      style={{width:"50em", padding:"2em", color:"white", backgroundColor:"green"}}
        duration="3000"
        open={isToastVisible}
        onClose={() => setIsToastVisible(false)} // Hide toast after it is closed
      >
        {toastMessage}
      </Toast>
    </>
  );
}
