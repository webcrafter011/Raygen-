import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => (
  <div className="about-page">
    <Header />
    <main className="about-main">
      <section className="about-hero">
        <h1>About RayGen Solar Farms Pvt Ltd</h1>
        <p>Leading the way in accessible solar investments for everyone</p>
      </section>
      
      <section className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            RayGen Solar Farms Pvt Ltd is committed to democratizing solar energy investments. 
            We provide individuals with the opportunity to own solar assets and earn predictable 
            monthly returns without the complexity of installing and maintaining solar panels.
          </p>
          
          <p>
            Our professionally managed solar farms ensure optimal performance while delivering 
            transparent, reliable returns to our investors. We believe in making renewable energy 
            investments accessible, profitable, and hassle-free.
          </p>
          
          <h2>Why Choose RayGen?</h2>
          <ul>
            <li>Transparent operations with regular reporting</li>
            <li>Professional asset management and maintenance</li>
            <li>Predictable monthly income streams</li>
            <li>Contribution to clean energy future</li>
            <li>Low minimum investment thresholds</li>
          </ul>
        </div>
        
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <p><strong>Email:</strong> info@raygensolar.com</p>
            <p><strong>Phone:</strong> +91-8432997835</p>
            <p><strong>WhatsApp:</strong> +91-9529661862</p>
            <p><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;