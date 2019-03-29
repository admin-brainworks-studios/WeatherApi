'use strict';

// Required Imports
var Weather = require('../api/models/weatherModel');
var tools = require('../tools');

module.exports.Weather = async function(json) {
  try {
    var weather = new Weather(json);
    // Edit Time and Name for future queries.
    weather.time = tools.currentTimeUnixZeroed();
    weather.name = weather.name.toLowerCase();

    weather.save(function(err) {
      if (err) throw err;
    });
  } catch(err) {
   console.log('Could not parse and save weather schema to mongoDB');
    // DBLOG
  }
}
