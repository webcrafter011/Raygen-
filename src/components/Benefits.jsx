import React from 'react';
import './Benefits.css';

const benefits = [
  {
    icon: '💰',
    text: 'Predictable monthly income',
  },
  {
    icon: '🛠️',
    text: 'Low-maintenance, professionally managed',
  },
  {
    icon: '🔒',
    text: 'Transparent 15-year investment locking period',
  },
];

const Benefits = () => (
  <section className="benefits" aria-label="Benefits">
    <div className="benefits-row">
      {benefits.map((b, i) => (
        <div className="benefit-item" key={i}>
          <span className="benefit-icon" aria-hidden="true">{b.icon}</span>
          <span className="benefit-text">{b.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Benefits;
