const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounding numbers', () => {
  assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('rounding up b', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('rounding up b and down a', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5); 
  });
  it('rounding up b and a', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
