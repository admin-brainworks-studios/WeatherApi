// external.js - Written By Thomas McCoy
// External OpenWeatherMap API
"use strict";

let request = require("request");
let fetch = require("node-fetch");

let apiKey = "235b178c6ebf7e4d316cc9743a996c76";



// Get Current Weather from OpenWeatherMap
module.exports.OWM_getWeatherCurrent = async function(_city, callback) {
  try {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${_city}&appid=${apiKey}`;
    let data = await fetch(url);
    console.log(url);
    let response = await data.json();
    //  console.log(response); // rem0ve
    callback(null, response);
  } catch (err) {
    console.log(err); //rem0ve
    callback(err, null);
  }
}
