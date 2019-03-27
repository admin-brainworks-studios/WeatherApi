 // weatherModel.js

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// weather model
var weatherModelSchema = new Schema({

  time: Number,        // Time Of Request
  id: Number,         // City ID
  name: String,       // City name
  dt: Number,         // Time of data calculation, unix, UTC
  cod: Number,        // Internal parameter
  visibility: Number, // Visibility, meter
  coord: {
    lon: Number,      // City geo location, Loitude
    lat: Number       // City geo location, latitude
  },
  weather: {          // (more info Weather condition codes)
		type: [
			'Mixed'
		]
	},
  main: {
    temp: Number,      // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    pressure: Number,  // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    humidity: Number,  //  Humidity, %
    temp_min: Number,  // Minimum temperature at the moment.
    temp_max: Number,  // Maximum temperature at the moment.
    sea_level: Number, // Atmospheric pressure on the sea level, hPa
    grnd_level: Number // Atmospheric pressure on the ground level, hPa
  },
  sys: {
    type: { type: 'Number' },  // Internal parameter
    id: Number,                // Internal parameter
    message: Number,           // Internal parameter
    country: String,           // Country code (GB, JP etc.)
    sunrise: Number,           // Sunrise time, unix, UTC
    sunset: Number             // Sunset time, unix, UTC
  },
  wind: {
    speed: Number, // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    deg: Number,    // Wind direction, degrees (meteorological)
    gust: Number
  },
  clouds: {
    all: Number    // Cloudiness, %
  },
  rain: {
    '1h': Number,  // Rain volume for the last 1 hour, mm
    '3h': Number   // Rain volume for the last 3 hours, mm
  },
  snow: {
    '1h': Number, // Snow volume for the last 1 hour, mm
    '3h': Number  // Snow volume for the last 3 hours, mm
  }

})
mongoose.model('weather', weatherModelSchema, 'weather') // weatherModelSchema

weatherModelSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

// weatherModel.js - Weather model exports
module.exports = mongoose.model('weather', weatherModelSchema);
