const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  it('GET / returns correct output', (done) => {
    request.get(`http://localhost:7865/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
