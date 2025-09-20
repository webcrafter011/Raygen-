import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh K.',
    location: 'Mumbai',
    text: 'Great monthly returns and transparent process. Highly recommend!',
  },
  {
    name: 'Priya S.',
    location: 'Bangalore',
    text: 'Easy investment with predictable income. Professional management is excellent.',
  },
];

const Testimonials = () => (
  <section className="testimonials" aria-label="Customer Testimonials">
    <h2>What Our Investors Say</h2>
    <div className="testimonial-cards">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <p>"{t.text}"</p>
          <div className="testimonial-author">
            <strong>{t.name}</strong>
            <span>{t.location}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="trust-info">
      <p><strong>RayGen Solar Farms Pvt Ltd</strong> - Registered company with transparent operations</p>
    </div>
  </section>
);

export default Testimonials;