import { romanToDecimal } from '../src/romanNumerals';

describe('romanToDecimal', () => {
  test('converts symbols correctly', () => {
    expect(romanToDecimal('I')).toBe(1);
    expect(romanToDecimal('V')).toBe(5);
    expect(romanToDecimal('X')).toBe(10);
    expect(romanToDecimal('L')).toBe(50);
    expect(romanToDecimal('C')).toBe(100);
    expect(romanToDecimal('D')).toBe(500);
    expect(romanToDecimal('M')).toBe(1000);
  });

  test('converts combinations correctly', () => {
    expect(romanToDecimal('II')).toBe(2);
    expect(romanToDecimal('III')).toBe(3);
    expect(romanToDecimal('VI')).toBe(6);
    expect(romanToDecimal('XV')).toBe(15);
  });

  test('converts complex combinations correctly', () => {
    expect(romanToDecimal('IV')).toBe(4);
    expect(romanToDecimal('IX')).toBe(9);
    expect(romanToDecimal('XL')).toBe(40);
    expect(romanToDecimal('XC')).toBe(90);
    expect(romanToDecimal('CD')).toBe(400);
    expect(romanToDecimal('CM')).toBe(900);
  });

  test('converts large numbers correctly', () => {
    expect(romanToDecimal('MMVI')).toBe(2006);
    expect(romanToDecimal('MCMXLIV')).toBe(1944);
    expect(romanToDecimal('MCMIII')).toBe(1903);
  });
});
