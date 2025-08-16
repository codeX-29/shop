import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "Electrical Design & Engineering",
      description: "Custom electrical design solutions for residential and commercial projects. Our engineers create efficient and safe electrical layouts tailored to your specific needs.",
      icon: "📐"
    },
    {
      id: 2,
      title: "Electrical Installation",
      description: "Professional installation of electrical systems, wiring, and fixtures for residential and commercial properties by certified electricians.",
      icon: "🔌"
    },
    {
      id: 3,
      title: "Wiring Services",
      description: "Complete wiring solutions including rewiring old systems, new installations, and troubleshooting electrical issues.",
      icon: "🔌"
    },
    {
      id: 4,
      title: "Home Automation",
      description: "Smart home solutions with automated lighting, security systems, and energy management for modern living.",
      icon: "🏠"
    },
    {
      id: 5,
      title: "Solar Consultation",
      description: "Expert advice on solar energy systems, installation, and maintenance to reduce your energy costs.",
      icon: "☀️"
    },
    {
      id: 6,
      title: "Electrical Maintenance",
      description: "Regular maintenance and safety inspections to keep your electrical systems running efficiently.",
      icon: "🛠️"
    },
    {
      id: 7,
      title: "Electrical Repairs",
      description: "Expert repair services for all types of electrical issues, from faulty outlets to complex circuit problems.",
      icon: "🔧"
    },
    {
      id: 8,
      title: "Lighting Solutions",
      description: "Professional lighting design and installation services for residential and commercial spaces.",
      icon: "💡"
    },
    {
      id: 9,
      title: "Electrical Safety Inspections",
      description: "Comprehensive safety inspections to identify potential hazards and ensure compliance with electrical codes.",
      icon: "✅"
    },
    {
      id: 10,
      title: "Generator Installation",
      description: "Backup power solutions with professional generator installation and maintenance services.",
      icon: "⚡"
    },
    {
      id: 11,
      title: "Panel Upgrades",
      description: "Electrical panel upgrades to meet modern power demands and safety standards.",
      icon: "📋"
    },
    {
      id: 12,
      title: "Energy Efficiency Audits",
      description: "Detailed energy audits to identify opportunities for reducing power consumption and costs.",
      icon: "📈"
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <h1>Our Electrical Services</h1>
        <p className="subtitle">Professional solutions for all your electrical needs</p>
        
        <div className="services-grid">
          {servicesList.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="service-cta">
          <h2>Need Professional Electrical Services?</h2>
          <p>Contact us today for a free consultation and quote</p>
          <button className="btn btn-primary" onClick={() => window.location.href="/contact"}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
