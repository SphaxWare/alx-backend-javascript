const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.4, 4.4)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 4.5)).to.equal(7);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of two rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 1.4, 4.4)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.5, 4.5)).to.equal(-3);
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of two rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.2)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 1.4, 4.4)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 4.5, 1.5)).to.equal(2.5);
    });

    it('should return Error for division by zero', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });
});

