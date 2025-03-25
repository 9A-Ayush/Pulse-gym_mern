import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          Pulse Gym
        </Link>
      </div>
      
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/classes" className="nav-link">Classes</Link>
        <Link to="/schedule" className="nav-link">Schedule</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <div className="auth-buttons">
          <Link to="/login" className="nav-link login-btn">Login</Link>
          <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar; 