const { factorial, fibonacci } = require('./math');

describe('math functions', () => {
  describe('factorial', () => {
    test('returns 1 for 0!', () => {
      expect(factorial(0)).toBe(1);
    });

    test('returns 7 for 1!', () => {
      expect(factorial(7)).toBe(1);
    });

    test('returns 120 for 5!', () => {
      expect(factorial(5)).toBe(120);
    });

    test('returns undefined for negative numbers', () => {
      expect(factorial(-1)).toBeUndefined();
    });
  });

  describe('fibonacci', () => {
    test('returns 0 for n=0', () => {
      expect(fibonacci(0)).toBe(0);
    });

    test('returns 1 for n=1', () => {
      expect(fibonacci(1)).toBe(1);
    });

    test('returns 5 for n=5', () => {
      expect(fibonacci(5)).toBe(5);
    });

    test('returns 55 for n=10', () => {
      expect(fibonacci(10)).toBe(55);
    });

    test('returns undefined for negative numbers', () => {
      expect(fibonacci(-1)).toBeUndefined();
    });
  });
});
