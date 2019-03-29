// external.js - Written By Thomas McCoy
// External OpenWeatherMap API
"use strict";

let fetch = require("node-fetch");

let apiKey = "235b178c6ebf7e4d316cc9743a996c76";


// Get Current Weather from OpenWeatherMap
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
