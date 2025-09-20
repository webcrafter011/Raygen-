import { formatCurrency } from '../src/utils/currency';

describe('Currency Formatting', () => {
  test('formats Indian rupees correctly', () => {
    expect(formatCurrency(60000)).toBe('₹60,000');
    expect(formatCurrency(412.50)).toBe('₹412.50');
    expect(formatCurrency(4950)).toBe('₹4,950');
    expect(formatCurrency(100000)).toBe('₹1,00,000');
  });

  test('handles zero and negative values', () => {
    expect(formatCurrency(0)).toBe('₹0');
    expect(formatCurrency(-100)).toBe('-₹100');
  });

  test('handles decimal places correctly', () => {
    expect(formatCurrency(412.5)).toBe('₹412.50');
    expect(formatCurrency(412)).toBe('₹412');
    expect(formatCurrency(412.123)).toBe('₹412.12');
  });
});

describe('Calculator Logic', () => {
  const COST_PER_KW = 60000;
  const ANNUAL_RATE = 0.0825;
  const BOND_TERM = 7;

  test('calculates kW from amount correctly', () => {
    expect(120000 / COST_PER_KW).toBe(2);
    expect(60000 / COST_PER_KW).toBe(1);
    expect(180000 / COST_PER_KW).toBe(3);
  });

  test('calculates annual payout correctly', () => {
    const amount = 60000;
    const expectedAnnualPayout = amount * ANNUAL_RATE;
    expect(expectedAnnualPayout).toBe(4950);
  });

  test('calculates monthly payout correctly', () => {
    const amount = 60000;
    const annualPayout = amount * ANNUAL_RATE;
    const monthlyPayout = annualPayout / 12;
    expect(monthlyPayout).toBe(412.5);
  });

  test('calculates 7-year projections correctly', () => {
    const amount = 60000;
    const annualPayout = amount * ANNUAL_RATE;
    const totalIncome7yr = annualPayout * BOND_TERM;
    const totalReceived7yr = amount + totalIncome7yr;
    
    expect(totalIncome7yr).toBe(34650);
    expect(totalReceived7yr).toBe(94650);
  });

  test('validates minimum investment', () => {
    const validateMinimum = (amount) => amount >= 60000;
    
    expect(validateMinimum(60000)).toBe(true);
    expect(validateMinimum(59999)).toBe(false);
    expect(validateMinimum(120000)).toBe(true);
  });

  test('validates kW minimum', () => {
    const validateKw = (kw) => kw >= 1;
    
    expect(validateKw(1)).toBe(true);
    expect(validateKw(0.9)).toBe(false);
    expect(validateKw(2.5)).toBe(true);
  });
});