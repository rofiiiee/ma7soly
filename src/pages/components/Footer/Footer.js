// src/components/Header/Header.js
import React from 'react';
// Import icons needed ONLY for Header
// Import the CSS file for the Header
import './Footer.css';

// 2. استيراد الأيقونات المستخدمة في الهيدر والفوتر
import {
  FaStoreAlt, FaTruck, FaTwitter, FaFacebookF, FaPinterestP,
  FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaChevronRight, FaPaperPlane, FaShoppingCart, FaUser, FaBell, FaSearch, FaBars
} from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';



function Footer() {
  // ... نفس كود الفوتر من الرد السابق ...
    return (
      <footer className="site-footer">
         <div className="footer-container">
          <div className="footer-column footer-about">
            <img src="/footer-logo.png" alt="محصولي" className="footer-logo" />
            <p>
              There are many variations of passages of lorem ipsum available, but the majority suffered.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-column footer-explore">
            <h2>Explore</h2>
            <ul className="footer-links">
              <li><a href="#"><FaChevronRight className="link-icon" /> About</a></li>
              <li><a href="#"><FaChevronRight className="link-icon" /> Services</a></li>
            </ul>
          </div>
          <div className="footer-column footer-contact">
            <h2>Contact</h2>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" /> <span>010000000</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" /> <span>needhelp@company.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" /> <span>Aswan, Egypt</span>
            </div>
            <form className="subscribe-form">
              <input type="email" placeholder="Your Email Address" required/>
              <button type="submit" aria-label="Subscribe"><FaPaperPlane /></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
             <p className="copyright-text">© All Copyright 2024 by shawonetc Themes</p>
             <div className="footer-bottom-links">
               <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
             </div>
          </div>
        </div>
      </footer>
    );
}


export default Footer; // Make sure to export the component
