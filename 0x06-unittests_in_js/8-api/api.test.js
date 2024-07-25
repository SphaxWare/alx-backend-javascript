const chai = require('chai');
const request = require('request');
const expect = chai.expect;
const app = require('./api');

describe('Index page', function() {
  before(function(done) {
    this.server = app.listen(7865, done);
  });

  after(function(done) {
    this.server.close(done);
  });

  it('should return status code 200', function(done) {
    request.get('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function(done) {
    request.get('http://localhost:7865', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
