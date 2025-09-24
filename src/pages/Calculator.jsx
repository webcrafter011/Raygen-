import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { formatCurrency } from '../utils/currency';
import './Calculator.css';

// Clean, single-file React component for the investment calculator
export default function Calculator() {
  // Constants
  const COST_PER_KW = 60000; // ₹ per kW
  const ANNUAL_PAYOUT_PER_KW = 5019; // ₹5,019 per year (5 units/day × 365 × ₹2.75/unit)
  const ANNUAL_RATE = ANNUAL_PAYOUT_PER_KW / COST_PER_KW; // ~8.37% per year
  const BOND_TERM = 15; // years

  // State
  const [inputType, setInputType] = useState('kw'); // 'kw' or 'amount'
  const [kw, setKw] = useState(1);
  const [amount, setAmount] = useState(COST_PER_KW);
  const [errors, setErrors] = useState({});

  // Helpers
  const toNumber = (v) => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };

  const getValidationErrors = ({ inputTypeLocal, kwLocal, amountLocal } = {}) => {
    const e = {};
    const useType = inputTypeLocal ?? inputType;
    const useKw = typeof kwLocal === 'number' ? kwLocal : kw;
    const useAmount = typeof amountLocal === 'number' ? amountLocal : amount;

    if (useType === 'kw') {
      if (useKw < 1) e.kw = 'Minimum 1 kW required';
      if (!Number.isFinite(useKw)) e.kw = 'Enter a valid number';
    } else {
      if (useAmount < COST_PER_KW) e.amount = `Minimum ₹${COST_PER_KW.toLocaleString()} required`;
      if (useAmount % COST_PER_KW !== 0) e.amount = `Amount must be in multiples of ₹${COST_PER_KW.toLocaleString()}`;
      if (!Number.isFinite(useAmount)) e.amount = 'Enter a valid number';
    }

    return e;
  };

  // Keep errors up to date when input changes
  const validateAndSet = ({ inputTypeLocal, kwLocal, amountLocal } = {}) => {
    const e = getValidationErrors({ inputTypeLocal, kwLocal, amountLocal });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Derived values (always compute from the current state)
  const calcKw = inputType === 'kw' ? toNumber(kw) : toNumber(amount) / COST_PER_KW;
  const calcAmount = inputType === 'amount' ? toNumber(amount) : toNumber(kw) * COST_PER_KW;

  const annualPayout = calcAmount * ANNUAL_RATE;
  const monthlyPayout = annualPayout / 12;
  const totalIncome15yr = annualPayout * BOND_TERM;
  const totalReceived15yr = calcAmount + totalIncome15yr;

  const generateYearlyTable = () => {
    const rows = [];
    for (let year = 1; year <= BOND_TERM; year++) {
      rows.push({
        year,
        annualPayout: annualPayout,
        cumulativePayout: annualPayout * year,
      });
    }
    return rows;
  };

  // Handlers
  const handleKwChange = (val) => {
    const num = toNumber(val);
    setKw(num);
    setAmount(num * COST_PER_KW);
    validateAndSet({ inputTypeLocal: 'kw', kwLocal: num });
  };

  const handleAmountChange = (val) => {
    const num = toNumber(val);
    setAmount(num);
    setKw(num / COST_PER_KW);
    validateAndSet({ inputTypeLocal: 'amount', amountLocal: num });
  };

  const handleToggle = (type) => {
    setInputType(type);
    // validate for the newly selected type
    validateAndSet({ inputTypeLocal: type });
  };

  // Evaluate current validity (do not mutate state here)
  const isValid = Object.keys(getValidationErrors()).length === 0;

  return (
    <div className="calculator-page">
      <Header />

      <main className="calculator-container" style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
        <h1>Investment Calculator</h1>
        <p>Calculate expected returns for a solar investment unit.</p>

        <div className="calculator-inputs" style={{ marginTop: '1.5rem' }}>
          <div className="input-toggle" role="tablist" aria-label="Input type">
            <button
              className={inputType === 'kw' ? 'active' : ''}
              onClick={() => handleToggle('kw')}
              aria-pressed={inputType === 'kw'}
            >
              Enter by kW
            </button>

            <button
              className={inputType === 'amount' ? 'active' : ''}
              onClick={() => handleToggle('amount')}
              aria-pressed={inputType === 'amount'}
            >
              Enter by Amount (₹)
            </button>
          </div>

          <div style={{ marginTop: '1rem' }}>
            {inputType === 'kw' ? (
              <div className="input-group">
                <label htmlFor="kw-input">Capacity (kW)</label>
                <input
                  id="kw-input"
                  type="number"
                  step="0.25"
                  min="1"
                  value={kw}
                  onChange={(e) => handleKwChange(e.target.value)}
                  className={errors.kw ? 'error' : ''}
                  aria-describedby={errors.kw ? 'kw-error' : undefined}
                />
                {errors.kw && <div id="kw-error" className="error-message">{errors.kw}</div>}
              </div>
            ) : (
              <div className="input-group">
                <label htmlFor="amount-input">Amount (₹)</label>
                <input
                  id="amount-input"
                  type="number"
                  step={COST_PER_KW}
                  min={COST_PER_KW}
                  value={amount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  className={errors.amount ? 'error' : ''}
                  aria-describedby={errors.amount ? 'amount-error' : undefined}
                />
                {errors.amount && <div id="amount-error" className="error-message">{errors.amount}</div>}
              </div>
            )}
          </div>

          <div className="constants" style={{ marginTop: '1.25rem' }}>
            <h3>Fixed Terms</h3>
            <div className="constant-item">
              <div>
                <div>Cost per 1 kW:</div>
                <div>{formatCurrency ? formatCurrency(COST_PER_KW) : `₹${COST_PER_KW.toLocaleString()}`}</div>
              </div>
              <div>
                <div>Annual payout per 1 kW:</div>
                <div>{formatCurrency ? formatCurrency(ANNUAL_PAYOUT_PER_KW) : `₹${ANNUAL_PAYOUT_PER_KW.toFixed(2)}`}</div>
              </div>
              <div>
                <div>Annual rate:</div>
                <div>8.37% p.a.</div>
              </div>
              <div>
                <div>Locking period:</div>
                <div>{BOND_TERM} years</div>
              </div>
              <div>
                <div>Payout frequency:</div>
                <div>Monthly</div>
              </div>
            </div>

            <div className="example-text" style={{ marginTop: '1rem' }}>
              <p>
                <strong>Example:</strong> 1 kW → {formatCurrency ? formatCurrency(COST_PER_KW) : `₹${COST_PER_KW.toLocaleString()}`} → Annual{' '}
                {formatCurrency ? formatCurrency(ANNUAL_PAYOUT_PER_KW) : `₹${ANNUAL_PAYOUT_PER_KW.toFixed(2)}`} → Monthly{' '}
                {formatCurrency ? formatCurrency(ANNUAL_PAYOUT_PER_KW / 12) : `₹${(ANNUAL_PAYOUT_PER_KW / 12).toFixed(2)}`} → 15-year income{' '}
                {formatCurrency ? formatCurrency(ANNUAL_PAYOUT_PER_KW * BOND_TERM) : `₹${(ANNUAL_PAYOUT_PER_KW * BOND_TERM).toFixed(2)}`} → Total received{' '}
                {formatCurrency ? formatCurrency(COST_PER_KW + ANNUAL_PAYOUT_PER_KW * BOND_TERM) : `₹${(COST_PER_KW + ANNUAL_PAYOUT_PER_KW * BOND_TERM).toFixed(2)}`}.
              </p>
            </div>
          </div>
        </div>

        <div className="calculator-results" style={{ marginTop: '1.75rem' }}>
          <h2>Investment Summary</h2>

          {!isValid ? (
            <div className="invalid-input">
              <p>Please enter valid investment details to see calculations.</p>
            </div>
          ) : (
            <>
              <div className="result-summary">
                <div className="result-item">
                  <span>Amount Invested:</span>
                  <span className="value">{formatCurrency ? formatCurrency(calcAmount) : `₹${calcAmount.toLocaleString()}`}</span>
                </div>

                <div className="result-item">
                  <span>kW Owned:</span>
                  <span className="value">{calcKw.toFixed(2)} kW</span>
                </div>

                <div className="result-item highlight">
                  <span>Monthly Payout:</span>
                  <span className="value">{formatCurrency ? formatCurrency(monthlyPayout) : `₹${monthlyPayout.toFixed(2)}`}</span>
                </div>

                <div className="result-item">
                  <span>Annual Payout:</span>
                  <span className="value">{formatCurrency ? formatCurrency(annualPayout) : `₹${annualPayout.toFixed(2)}`}</span>
                </div>

                <div className="result-item">
                  <span>15-year Income:</span>
                  <span className="value">{formatCurrency ? formatCurrency(totalIncome15yr) : `₹${totalIncome15yr.toFixed(2)}`}</span>
                </div>

                <div className="result-item highlight">
                  <span>Total Received at Maturity:</span>
                  <span className="value">{formatCurrency ? formatCurrency(totalReceived15yr) : `₹${totalReceived15yr.toFixed(2)}`}</span>
                </div>
              </div>

              <div className="yearly-table" style={{ marginTop: '1rem' }}>
                <h3>Year-by-Year Breakdown</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Annual Payout</th>
                      <th>Cumulative Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generateYearlyTable().map((row) => (
                      <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{formatCurrency ? formatCurrency(row.annualPayout) : `₹${row.annualPayout.toFixed(2)}`}</td>
                        <td>{formatCurrency ? formatCurrency(row.cumulativePayout) : `₹${row.cumulativePayout.toFixed(2)}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="calculator-ctas" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <button className="primary-btn">Contact Sales to Invest</button>
                <button
                  className="secondary-btn"
                  onClick={() => {
                    // simple client-side CSV download for the summary
                    const rows = generateYearlyTable();
                    const csv = [
                      ['Year', 'Annual Payout', 'Cumulative Income'],
                      ...rows.map((r) => [r.year, r.annualPayout.toFixed(2), r.cumulativePayout.toFixed(2)]),
                    ]
                      .map((r) => r.join(','))
                      .join('\n');

                    const blob = new Blob([csv], { type: 'text/csv' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'investment-summary.csv';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  Download Investment Summary
                </button>
              </div>
            </>
          )}

          <div className="calculator-disclaimer" style={{ marginTop: '1rem' }}>
            <small>
              Illustrative figures. Returns shown before taxes. Principal refundable at end of {BOND_TERM}-year locking period. Investments subject to
              terms and conditions.
            </small>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
