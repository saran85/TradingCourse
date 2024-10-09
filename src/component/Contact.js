import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs({placeholder}) {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    to_name: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      emailjs
        .sendForm('service_52ane6q', 'template_86e1pzh', form.current, {
          publicKey: 'j5AijbRC7S-uHmC3T',
        })
        .then(
          () => {
            alert('Message sent successfully!');
            clearForm(); // Clear the form after success
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name) newErrors.from_name = 'Name is required';
    if (!formData.to_name) newErrors.to_name = 'Email is required';
    else if (!emailRegex.test(formData.to_name)) newErrors.to_name = 'Invalid email format';
    if (!formData.message) newErrors.message = 'Message is required';

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
      from_name: '',
      to_name: '',
      message: '',
    });
    setErrors({});
  };

  // Inline styles
  const formStyles = {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const labelStyles = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    transition: 'border-color 0.3s ease',
  };

  const errorStyles = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  };

  const textareaStyles = {
    ...inputStyles,
    resize: 'vertical',
    height: '120px',
  };

  const buttonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    alignSelf: 'flex-start',
  };

  const buttonHoverStyles = {
    backgroundColor: '#45a049',
  };

  return (
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
        value="Send"
        style={buttonStyles}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyles.backgroundColor)}
      />
    </form>
  );
}
