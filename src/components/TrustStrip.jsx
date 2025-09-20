import React from 'react';
import './TrustStrip.css';

const trustItems = [
  { label: '1 kW = ₹60,000' },
  { label: 'Annual yield 8.25% p.a.' },
  { label: 'Monthly payout per kW = ₹412.50' },
  { label: '7-year bond' },
];

const TrustStrip = () => (
  <section className="trust-strip" aria-label="Quick Numbers">
    <div className="trust-items">
      {trustItems.map((item, i) => (
        <div className="trust-item" key={i}>{item.label}</div>
      ))}
    </div>
    <div className="trust-caption">
      <small>Returns shown before taxes. Principal refundable at maturity; subject to T&Cs.</small>
    </div>
  </section>
);

export default TrustStrip;
