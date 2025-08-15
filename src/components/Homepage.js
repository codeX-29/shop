import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Welcome Banner */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Engenix</h1>
          <p>Your Trusted Partner for Electrical Solutions</p>
          <p>Quality products and professional services for all your electrical needs</p>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="container">
          <h2>Why Choose Raghav Electric?</h2>
          <div className="highlight-cards">
            <div className="card">
              <h3>Wide Range of Products</h3>
              <p>From household appliances to industrial components, we have everything you need.</p>
            </div>
            <div className="card">
              <h3>Professional Services</h3>
              <p>Installation, maintenance, and consultation by certified electricians.</p>
            </div>
            <div className="card">
              <h3>Quality Assurance</h3>
              <p>All products and services come with our guarantee of excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="product-preview">
            <div className="product-card">
              <div className="product-image-placeholder">Lighting Product</div>
              <h3>LED Lighting Solutions</h3>
              <p>Energy-efficient lighting for homes and businesses</p>
            </div>
            <div className="product-card">
              <div className="product-image-placeholder">Appliance Product</div>
              <h3>Home Appliances</h3>
              <p>Quality electrical appliances for modern living</p>
            </div>
            <div className="product-card">
              <div className="product-image-placeholder">Solar Product</div>
              <h3>Solar Products</h3>
              <p>Sustainable energy solutions for the future</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
