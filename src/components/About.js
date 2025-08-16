import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
          <img 
              src="https://sdmntpreastus.oaiusercontent.com/files/00000000-c434-61f9-8b2a-102484c2e765/raw?se=2025-08-16T08%3A40%3A10Z&sp=r&sv=2024-08-04&sr=b&scid=bb46ac73-b2ea-5409-93b8-e8f4f2416bca&skoid=60f2aa1f-3685-43ee-be37-d8c8d08d5a64&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-16T01%3A06%3A40Z&ske=2025-08-17T01%3A06%3A40Z&sks=b&skv=2024-08-04&sig=LaHbpaT5Y9WBl7ouwIL/x4RrUU3hBdIbwz90v8mPttg%3D" 
              alt=" Icon" 
              className="card-img"
            />
        <h1>About Engenix</h1>
        <p className="subtitle">Your trusted electrical solutions provider</p>

        {/* Story, Vision, Mission, Shop as boxes */}
        <div className="about-boxes">
          <div className="about-card">
            <img 
              src="https://img.icons8.com/color/96/000000/idea.png" 
              alt="Story Icon" 
              className="card-img"
            />
            <h2>Story</h2>
            <p>
              Engenix was founded in 2010 as a small local shop with the mission 
              to provide reliable and affordable electrical solutions. 
              Today, we have expanded into residential, commercial, and solar-based projects, 
              serving thousands of customers with innovative energy solutions.
            </p>
          </div>

          <div className="about-card">
            <img 
              src="https://img.icons8.com/color/96/000000/goal.png" 
              alt="Vision Icon" 
              className="card-img"
            />
            <h2>Vision</h2>
            <p>
              To be the leading provider of electrical products and services in our region, 
              known for reliability, quality, and customer satisfaction.
            </p>
          </div>

          <div className="about-card">
            <img 
              src="https://img.icons8.com/color/96/000000/rocket.png" 
              alt="Mission Icon" 
              className="card-img"
            />
            <h2>Mission</h2>
            <p>
              To deliver safe, efficient, and innovative electrical solutions 
              that enhance the quality of life while maintaining the highest 
              standards of service and integrity.
            </p>
          </div>

          <div className="about-card">
            <img 
              src="https://img.icons8.com/color/96/000000/shop.png" 
              alt="Shop Icon" 
              className="card-img"
            />
            <h2>Visit Our Shop</h2>
            <p>
              You can find us here:{" "}
              <a
                href="https://www.google.com/maps?q=123+Main+Street,+Springfield"
                target="_blank"
                rel="noopener noreferrer"
              >
                123 Alager Main Anna Nager, Springfield
              </a>
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="values">
          <h2> Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <img src="https://img.icons8.com/color/96/000000/medal.png" alt="Quality" className="card-img"/>
              <h3>Quality</h3>
              <p>We never compromise on the quality of our products and services.</p>
            </div>
            <div className="value-card">
              <img src="https://img.icons8.com/?size=100&id=zgeHEH0eyCyC&format=png&color=000000" alt="Safety" className="card-img"/>
              <h3>Safety</h3>
              <p>All our work adheres to the highest safety standards and regulations.</p>
            </div>
            <div className="value-card">
              <img src="https://img.icons8.com/color/96/000000/handshake.png" alt="Integrity" className="card-img"/>
              <h3>Integrity</h3>
              <p>We believe in honest, transparent business practices with our customers.</p>
            </div>
            <div className="value-card">
              <img src="https://img.icons8.com/color/96/000000/engineer.png" alt="Expertise" className="card-img"/>
              <h3>Expertise</h3>
              <p>Our team consists of certified professionals with years of experience.</p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="journey">
          <h2>Journey</h2>
          <div className="timeline">
            <div className="milestone">
              <img src="https://img.icons8.com/?size=100&id=XrEFnp33pJYw&format=png&color=000000" alt="2010" className="card-img"/>
              <h3>2010</h3>
              <p>Founded as a small local electrical shop with a mission to provide quality solutions to the community.</p>
            </div>
            <div className="milestone">
              <img src="https://img.icons8.com/color/96/000000/solar-panel.png" alt="2015" className="card-img"/>
              <h3>2015</h3>
              <p>Expanded services to include commercial electrical work and solar panel installations.</p>
            </div>
            <div className="milestone">
              <img src="https://img.icons8.com/color/96/000000/online-store.png" alt="2018" className="card-img"/>
              <h3>2018</h3>
              <p>Launched online store to make electrical products more accessible to our customers.</p>
            </div>
            <div className="milestone">
              <img src="https://img.icons8.com/?size=100&id=Ebnkzzpji4Bu&format=png&color=000000" alt="2020" className="card-img"/>
              <h3>2020</h3>
              <p>Integrated smart home automation services to meet growing demand for modern solutions.</p>
            </div>
            <div className="milestone">
              <img src="https://img.icons8.com/color/96/000000/electricity.png" alt="2023" className="card-img"/>
              <h3>2023</h3>
              <p>Opened second location and introduced 24/7 emergency electrical services.</p>
            </div>
            <div className="milestone">
              <img src="https://img.icons8.com/?size=100&id=1pGowjH1ocNl&format=png&color=000000" alt="2025" className="card-img"/>
              <h3>2025</h3>
              <p>Developing mobile app for easier product browsing and service booking.</p>
            </div>
            <div className="milestone">
              <img src="https://img.icons8.com/color/96/000000/artificial-intelligence.png" alt="Future" className="card-img"/>
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
