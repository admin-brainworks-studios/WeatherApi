"use strict";

// Required Imports
var mongoose = require("mongoose");
var db = mongoose.connection;
var Weather = require("../api/models/weatherModel");
var get = require('./get');
var tools = require('../tools');

module.exports.Weather = async function(json) {
  try {
    var weather = new Weather(json);
    // Edit Time and Name for future queries.
    weather.time = tools.currentTimeUnixZeroed();
    weather.name = weather.name.toLowerCase();
    weather.source = "OpenWeatherMap";

    weather.save(function(err) {
      if (err) throw err;
      console.log("Created Weather Entry on MongoDB");
    });
  } catch {
    console.log("Could not parse and save weather schema to mongoDB");
    // DBLOG
  }
}
