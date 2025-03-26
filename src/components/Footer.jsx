import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { 
  faFacebookF, 
  faInstagram, 
  faYoutube, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

// Prevent FontAwesome from dynamically adding its CSS
config.autoAddCss = false;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pulse Gym</h3>
          <p>Transform your life through fitness and wellness.</p>
          <div className="social-links">
            <a href="https://fb.openinapp.co/slva6" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>              
            <a href="https://insta.openinapp.co/x2h0y" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>                  
            <a href="https://yt.openinapp.co/einv7" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </a>                  
            <a href="https://wa.me/9472548097" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>    
          </div>    
        </div>    

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>    
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>                                                          
        </div>                                                          

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>Pulse Gym </li>
            <li>Gopalganj</li>
            <li>Phone: +91 9472548097</li>
            <li>Email: info@pulsegym.com</li>
          </ul>                                                                      
        </div>                                                                      

        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul className="opening-hours">
            <li>Monday - Friday: 6:00 AM - 10:00 PM</li>
            <li>Saturday: 7:00 AM - 8:00 PM</li>
            <li>Sunday: 8:00 AM - 6:00 PM</li>
          </ul>                                                                  
        </div>                                                                  
      </div>                                                                  

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pulse Gym. All rights reserved.</p>
       <p>                                                                                                          
              <a                                                                                                    
                href="https://www.instagram.com/ayush_ix_xi/?hl=en"
                target="_blank"                                                                                                    
                rel="noopener noreferrer"                                                                                    
                className="footer-link"
              >
                dev.ayush
              </a>                                                                                    
            </p>                                                                                    
             
      </div>                                                              
    </footer>
  );                                                      
};                                                      

export default Footer; 
