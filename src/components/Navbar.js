import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <Logo />
              Engenix
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/user/login">User Login</Link></li>
            <li><Link to="/admin/login">Admin Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 