"use strict";

async function postWeather(json) {
  try {
    var weather = new Weather(json);
    // Edit Time and Name for future queries.
    weather.time = currentTimeUnixZeroed();
    weather.name = weather.name.toLowerCase();

    weather.save(function(err) {
      if (err) throw err;
      console.log("Created Weather Entry on MongoDB");
    });
  } catch {
    console.log("Could not parse and save weather schema to mongoDB");
    // DBLOG
  }
}
