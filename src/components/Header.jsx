import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ onContactClick }) => {
  const location = useLocation();
  return (
    <header className="header" aria-label="Main Navigation">
      <nav className="nav" aria-label="Primary">
        <div className="logo">
          <Link to="/" aria-label="RayGen Solar Farms Pvt Ltd Home">
            <span className="logo-text">RayGen Solar</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/calculator" aria-current={location.pathname === '/calculator' ? 'page' : undefined}>Calculator</Link></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button className="contact-btn" aria-label="Contact Sales" onClick={onContactClick}>Contact Sales</button>
      </nav>
    </header>
  );
};

export default Header;
