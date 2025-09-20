import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import TrustStrip from '../components/TrustStrip';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

  return (
    <div className="home">
      <Header onContactClick={handleContactClick} />
      <main>
        <Hero onContactClick={handleContactClick} />
        <Benefits />
        <TrustStrip />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <section className="contact-section" id="contact">
          <h2>Ready to Invest?</h2>
          <p>Contact our team to start your solar investment journey</p>
          <button className="primary-btn" onClick={handleContactClick}>Book a Callback</button>
        </section>
      </main>
      <Footer />
      {showContactForm && <ContactForm onClose={handleCloseContact} />}
      
      {/* Fixed mobile CTA */}
      <div className="mobile-cta">
        <button className="mobile-contact-btn" onClick={handleContactClick}>Contact Sales</button>
      </div>
    </div>
  );
};

export default Home;