// authToken_tests.js - Written By Thomas McCoy
// Chai Tests for functions held in //api/authToken/

var expect = require('chai').expect;
const authToken = require('../../api/authToken/index.js');

describe('authToken_tests', function() {
  var gen_response;
  it('generateApiKey', function(done) {
    authToken.generateApiKey(function(err, response) {
      expect(response)
        .to.have.property('key')
        .with.lengthOf(32);
      gen_response = response;
      done();
    });
  });

  it('pinRequest', function(done) {
    authToken.pinRequest(gen_response.key, function(err) {
      expect(err).to.equal(null);
      done();
    });
  });

  it('isApiKeyValid', function(done) {
    authToken.isApiKeyValid(gen_response.key, function(err, _) { // eslint-disable-line no-unused-vars
      expect(err).to.equal(false);
      done();
    });
  });
});

module.exports = 'test_AuthToken';
