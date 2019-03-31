// get_tests.js - Written By Thomas McCoy
// Chai Tests for functions held in //db/


var expect = require("chai").expect;
const get = require("../../db/get");
var mongoose = require("mongoose"),
  weather = mongoose.model("weather");

describe("get_tests (housekeeping)", function() {
  it("Delete MongoDB Data - Matching City 'melbourne'", function(done) {
    var query = { name: "melbourne" };
    weather.deleteOne(query, function(err, _) { // eslint-disable-line no-unused-vars
      expect(err).to.equal(null);
      done();
    });
  });
});

describe("get_tests", function() {
  it("Test For OpenWeatherMap", function(done) {
    get.weatherCurrent("Melbourne", function(err, response) {
      expect(response)
        .to.have.property("source")
        .with.equal("OpenWeatherMap");
      gen_response = response;
      done();
    });
  });

  it("Test For MongoDB", function(done) {
    get.weatherCurrent("Melbourne", function(err, response) {
      expect(response)
        .to.have.property("source")
        .with.equal("MongoDB");
      gen_response = response;
      done();
    });
  });
});

module.exports = "test_AuthToken";
