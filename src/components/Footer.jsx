import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer" aria-label="Footer">
    <div className="footer-links">
      <Link to="/calculator">Calculator</Link>
      <a href="#how-it-works">How it works</a>
      <a href="#faq">FAQ</a>
      <Link to="/about">About</Link>
      <a href="#contact">Contact</a>
    </div>
    <div className="footer-legal">
      <span>Privacy</span> | <span>Terms</span>
    </div>
    <div className="footer-disclaimer">
      <small>This is not a public offer. Investments governed by our agreement. Investments involve risk.</small>
    </div>
  </footer>
);

export default Footer;
