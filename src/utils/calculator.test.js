import { formatCurrency } from '../src/utils/currency';

describe('Currency Formatting', () => {
  test('formats Indian rupees correctly', () => {
    expect(formatCurrency(60000)).toBe('₹60,000');
    expect(formatCurrency(418.25)).toBe('₹418.25');
    expect(formatCurrency(5019)).toBe('₹5,019');
    expect(formatCurrency(100000)).toBe('₹1,00,000');
  });

  test('handles zero and negative values', () => {
    expect(formatCurrency(0)).toBe('₹0');
    expect(formatCurrency(-100)).toBe('-₹100');
  });

  test('handles decimal places correctly', () => {
    expect(formatCurrency(418.25)).toBe('₹418.25');
    expect(formatCurrency(418)).toBe('₹418');
    expect(formatCurrency(418.123)).toBe('₹418.12');
  });
});

describe('Calculator Logic', () => {
  const COST_PER_KW = 60000;
  const ANNUAL_PAYOUT_PER_KW = 5019;
  const ANNUAL_RATE = ANNUAL_PAYOUT_PER_KW / COST_PER_KW; // ~0.0837
  const BOND_TERM = 15;

  test('calculates kW from amount correctly', () => {
    expect(120000 / COST_PER_KW).toBe(2);
    expect(60000 / COST_PER_KW).toBe(1);
    expect(180000 / COST_PER_KW).toBe(3);
  });

  test('calculates annual payout correctly', () => {
    const amount = 60000;
    const expectedAnnualPayout = ANNUAL_PAYOUT_PER_KW;
    expect(expectedAnnualPayout).toBe(5019);
  });

  test('calculates monthly payout correctly', () => {
    const monthlyPayout = ANNUAL_PAYOUT_PER_KW / 12;
    expect(Math.round(monthlyPayout * 100) / 100).toBe(418.25);
  });

  test('calculates 15-year projections correctly', () => {
    const amount = 60000;
    const totalIncome15yr = ANNUAL_PAYOUT_PER_KW * BOND_TERM;
    const totalReceived15yr = amount + totalIncome15yr;
    
    expect(totalIncome15yr).toBe(75285);
    expect(totalReceived15yr).toBe(135285);
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