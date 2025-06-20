import React, { useState } from 'react';
import Header from '../components/Header';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send this data to an API or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={pageStyle}>
      <Header />
      <div style={containerStyle}>
        <h1 style={titleStyle}>📞 Contact Us</h1>

        <p style={subTextStyle}>
          Have any questions or feedback? We'd love to hear from you.
        </p>

        {submitted ? (
          <div style={thankYouStyle}>
            <h3>✅ Thank you for your message!</h3>
            <p>We’ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            />
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

// Styles
const pageStyle = {
  minHeight: '100vh',
  backgroundColor: '#f4f8fb',
  fontFamily: 'Segoe UI, sans-serif',
  display: 'flex',
  flexDirection: 'column',
};

const containerStyle = {
  padding: '40px',
  maxWidth: '600px',
  margin: '0 auto',
};

const titleStyle = {
  fontSize: '2rem',
  textAlign: 'center',
  color: '#2c3e50',
  marginBottom: '10px',
};

const subTextStyle = {
  textAlign: 'center',
  color: '#555',
  marginBottom: '30px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical',
};

const buttonStyle = {
  backgroundColor: '#0077b6',
  color: '#fff',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
};

const thankYouStyle = {
  textAlign: 'center',
  backgroundColor: '#d4edda',
  padding: '20px',
  borderRadius: '10px',
  border: '1px solid #28a745',
  color: '#155724',
};

export default ContactPage;
