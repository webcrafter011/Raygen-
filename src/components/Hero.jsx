import React from 'react';
import './Hero.css';

const Hero = ({ onContactClick }) => (
  <section className="hero" aria-label="Hero">
    <div className="hero-content">
      <h1>Own a solar asset. Earn passive monthly income.</h1>
      <p className="subhead">Invest in RayGen Solar Farm units from ₹60,000 and get predictable monthly returns—without needing a rooftop.</p>
      <div className="hero-ctas">
        <button className="primary-btn" aria-label="Contact Sales" onClick={onContactClick}>Contact Sales</button>
        <a className="secondary-btn" href="/calculator">Calculate returns</a>
      </div>
    </div>
    <div className="hero-image">
      {/* Placeholder SVG for solar panels */}
      <img src="/solar-hero.svg" alt="Solar panels illustration" className="responsive-img" />
    </div>
  </section>
);

export default Hero;
