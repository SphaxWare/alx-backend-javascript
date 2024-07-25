const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response from the API', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.be.an('object');
        expect(response.data).to.equal('Successful response from the API');
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
