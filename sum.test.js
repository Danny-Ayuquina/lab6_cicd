const sum = require('./sum.js');

test('sum of 1 and 2 should be 3', (t) => {
    expect(sum(1, 2)).toBe(3);
});

