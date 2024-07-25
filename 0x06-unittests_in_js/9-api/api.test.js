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

  describe('Cart page', function() {
    it('should return status code 200 and correct message for valid cart ID', function(done) {
      request.get('http://localhost:7865/cart/12', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status code 404 for invalid cart ID', function(done) {
      request.get('http://localhost:7865/cart/hello', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
