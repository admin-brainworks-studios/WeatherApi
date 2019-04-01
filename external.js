// external.js - Written By Thomas McCoy
// External OpenWeatherMap API
'use strict';

const fetch = require("node-fetch");

let apiKey = 'd6db657485d33608e9ecb2eaa0b7489d';

// // Get Current Weather from OpenWeatherMap
module.exports.OWM_getWeatherCurrent = async function(_city, callback) {
  try {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${_city}&appid=${apiKey}`;
    let data = await fetch(url);
    let response = await data.json();
    callback(null, response);
  } catch (err) {
    callback(err, null);
  }

}
