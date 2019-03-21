// external.js - Written By Thomas McCoy 
// External OpenWeatherMap API
let request = require('request');

let apiKey = '235b178c6ebf7e4d316cc9743a996c76';
let city = 'melbourne';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
