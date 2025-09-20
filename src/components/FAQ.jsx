import React from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'How are returns calculated?',
    answer: 'Returns are calculated at 8.25% per annum on your investment amount. Use our calculator to see exact figures for your investment.',
  },
  {
    question: 'When are payouts made?',
    answer: 'Monthly payouts are made on approximately the same date each month directly to your registered bank account.',
  },
  {
    question: 'What happens at locking period maturity?',
    answer: 'At the end of the 15-year locking period, your principal investment amount is returned in full.',
  },
  {
    question: 'What is the tax treatment?',
    answer: 'Investors are responsible for tax obligations on returns received. Please consult your tax advisor for specific guidance.',
  },
  {
    question: 'What is the minimum investment?',
    answer: 'The minimum investment is ₹60,000, which corresponds to 1 kW of solar capacity.',
  },
  {
    question: 'Can I transfer or exit early?',
    answer: 'Please contact our sales team to discuss transferability options and early exit policies.',
  },
];

const FAQ = () => (
  <section className="faq" id="faq" aria-label="Frequently Asked Questions">
    <h2>FAQ</h2>
    <div className="faq-items">
      {faqs.map((faq, i) => (
        <details className="faq-item" key={i}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
    <div className="faq-disclaimer">
      <p><strong>Legal Disclaimers:</strong></p>
      <ul>
        <li>This is not a public offer. All investments are subject to our private agreement.</li>
        <li>Past performance does not guarantee future results.</li>
        <li>All investments involve risk and principal may be at risk.</li>
        <li>Please read our Terms & Conditions carefully before investing.</li>
      </ul>
    </div>
  </section>
);

export default FAQ;