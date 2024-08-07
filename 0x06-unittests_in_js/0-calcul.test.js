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
  it('rounding up a', () => {
    assert.strictEqual(calculateNumber(1.5, 3), 5); 
  });
  it('rounding up a and down b', () => {
    assert.strictEqual(calculateNumber(1.5, 1.2), 3); 
  });
  it('rounding down b', () => {
    assert.strictEqual(calculateNumber(1, 3.2), 4); 
  });
  it('rounding down a', () => {
    assert.strictEqual(calculateNumber(1.2, 6), 7); 
  });
});
