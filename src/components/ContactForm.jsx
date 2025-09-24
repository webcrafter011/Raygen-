import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    amount: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Mock API call - replace with real endpoint
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', city: '', amount: '' });
        setTimeout(() => {
          setSubmitStatus(null);
          onClose && onClose();
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-overlay" onClick={onClose}>
      <div className="contact-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close form">&times;</button>
        <h3>Book a Callback</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Full Name"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-label="Phone Number"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Email"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            aria-label="City"
          />
          <input
            type="text"
            name="amount"
            placeholder="Units of kW"
            value={formData.amount}
            onChange={handleChange}
            aria-label="Investment Amount"
          />
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? 'Submitting...' : 'Book Callback'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <div className="success-message">Thank you! We'll contact you soon.</div>
        )}
        {submitStatus === 'error' && (
          <div className="error-message">Something went wrong. Please try again.</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;