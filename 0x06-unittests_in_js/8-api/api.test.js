const chai = require('chai');
const request = require('request');
const expect = chai.expect;
const app = require('./api');

describe('Index page', function() {
  it('should return correct output', function(done) {
    request.get('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
