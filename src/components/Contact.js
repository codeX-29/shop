import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="subtitle">Get in touch with our electrical experts</p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Our Contact Information</h2>

            <div className="info-item">
              <h3>📍 Address</h3>
              <p>
                <a
                  href="https://www.google.com/maps/place/123+Alager+Kovil,+Alager+Nagar,+K.pudur,+Madurai-625007"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#007bff', textDecoration: 'underline' }}
                >
                  123 Alager Kovil, Alager Nagar, K.pudur, Madurai-625007
                </a>
              </p>
            </div>

            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>+91 6384640244</p>
            </div>

            <div className="info-item">
              <h3>💬 WhatsApp</h3>
              <p>+91 9442004969</p>
            </div>

            <div className="info-item">
              <h3>✉️ Email</h3>
              <p>info@Engenixelectric.com</p>
            </div>

            <div className="info-item">
              <h3>🕒 Business Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>

            <div className="map-placeholder">
              <h3>Our Location</h3>
              <div className="map-image">
                <iframe
                  title="Engenix Electric Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.123456789!2d78.1001234!3d9.923456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00xxxxxxxxxxxx%3A0xabcdef123456789!2s123+Alager+Kovil,+Alager+Nagar,+K.pudur,+Madurai-625007!5e0!3m2!1sen!2sin!4v1692112345678!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
