import React from 'react';
import './HowItWorks.css';

const steps = [
  { step: 1, title: 'Pick your investment', desc: 'Choose the amount you want to invest in solar farm units' },
  { step: 2, title: 'We allocate your asset and assign your unique asset ID', desc: 'Receive your dedicated solar asset with unique identification' },
  { step: 3, title: 'Receive monthly payouts', desc: 'Get predictable monthly returns deposited to your account' },
  { step: 4, title: 'Principal returned at bond maturity (7 years)', desc: 'Receive your initial investment back after 7 years' },
];

const HowItWorks = () => (
  <section className="how-it-works" id="how-it-works" aria-label="How It Works">
    <h2>How It Works</h2>
    <div className="steps">
      {steps.map((s) => (
        <div className="step" key={s.step}>
          <div className="step-number" aria-hidden="true">{s.step}</div>
          <div className="step-content">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;