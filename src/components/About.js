import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1>About Engenix</h1>
        <p className="subtitle">Your trusted electrical solutions provider</p>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Engenix was founded with a simple mission: to provide high-quality electrical products and services to our community. 
              Starting as a small local shop in 2010, we've grown to become a trusted name in electrical solutions for both residential 
              and commercial customers.
            </p>
            <p>
              Our founder began his journey as an electrician with over 15 years of experience in the field. 
              His expertise and commitment to quality service laid the foundation for our business. Today, we combine traditional 
              electrical knowledge with modern technology to serve you better.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              To be the leading provider of electrical products and services in our region, known for our reliability, 
              quality, and customer-centric approach.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To deliver safe, efficient, and innovative electrical solutions that enhance the quality of life for our customers 
              while maintaining the highest standards of service and integrity.
            </p>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              Our Storefront
            </div>
          </div>
        </div>
        
        <div className="values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We never compromise on the quality of our products and services.</p>
            </div>
            <div className="value-card">
              <h3>Safety</h3>
              <p>All our work adheres to the highest safety standards and regulations.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We believe in honest, transparent business practices with our customers.</p>
            </div>
            <div className="value-card">
              <h3>Expertise</h3>
              <p>Our team consists of certified professionals with years of experience.</p>
            </div>
          </div>
        </div>
        
        <div className="roadmap">
          <h2>Our Roadmap</h2>
          <div className="timeline">
            <div className="milestone">
              <h3>2010</h3>
              <p>Founded as a small local electrical shop with a mission to provide quality solutions to the community.</p>
            </div>
            <div className="milestone">
              <h3>2015</h3>
              <p>Expanded services to include commercial electrical work and solar panel installations.</p>
            </div>
            <div className="milestone">
              <h3>2018</h3>
              <p>Launched online store to make electrical products more accessible to our customers.</p>
            </div>
            <div className="milestone">
              <h3>2020</h3>
              <p>Integrated smart home automation services to meet growing demand for modern solutions.</p>
            </div>
            <div className="milestone">
              <h3>2023</h3>
              <p>Opened second location and introduced 24/7 emergency electrical services.</p>
            </div>
            <div className="milestone">
              <h3>2025</h3>
              <p>Developing mobile app for easier product browsing and service booking.</p>
            </div>
            <div className="milestone">
              <h3>Future Plans</h3>
              <p>Expanding to additional locations and introducing AI-powered energy efficiency solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
