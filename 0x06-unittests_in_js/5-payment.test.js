const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the original method
    consoleSpy.restore();
  });

  it('should log the correct total for 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct total for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
