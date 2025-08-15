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
    // In a real application, you would send this data to a server
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
              <p>123 Electrical Street, Power Nagar, Bangalore, Karnataka 560001</p>
            </div>
            
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>
            
            <div className="info-item">
              <h3>💬 WhatsApp</h3>
              <p>+91 98765 43210</p>
            </div>
            
            <div className="info-item">
              <h3>✉️ Email</h3>
              <p>info@raghavelectric.com</p>
            </div>
            
            <div className="info-item">
              <h3>🕒 Business Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
            
            <div className="map-placeholder">
              <h3>Our Location</h3>
              <div className="map-image">
                Google Maps Integration
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
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
