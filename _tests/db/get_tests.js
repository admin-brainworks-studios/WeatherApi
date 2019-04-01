// get_tests.js - Written By Thomas McCoy
// Chai Tests for functions held in //db/


const expect = require('chai').expect;
const get = require('../../db/get');
const mongoose = require('mongoose'),
  weather = mongoose.model('weather');

describe('get_tests (housekeeping)', function() {
  it("Delete MongoDB Data - Matching City 'melbourne'", function(done) {
    let query = { name: 'melbourne' };
    weather.deleteOne(query, function(err, _) { // eslint-disable-line no-unused-vars
      expect(err).to.equal(null);
      done();
    });
  });
});

describe('get_tests', function() {
  it('Test For OpenWeatherMap', function(done) {
    get.weatherCurrent('melbourne', function(err, response) {
      expect(response)
        .to.have.property('source')
        .with.equal('OpenWeatherMap');
      done();
    });
  });

  it('Test For MongoDB', function(done) {
    get.weatherCurrent('melbourne', function(err, response) {
      expect(response)
        .to.have.property('source')
        .with.equal('MongoDB');
      done();
    });
  });
});

module.exports = 'test_AuthToken';
