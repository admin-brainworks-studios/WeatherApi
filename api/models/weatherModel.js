 // weatherModel.js
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// weather model
var weatherModelSchema = new Schema({
  id: Int,        // City ID
  name: String,   // City name
  dt: Long,       // Time of data calculation, unix, UTC
  cod: interval,  // Internal parameter
  coord: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'coord'
  },
  moreinfo: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'moreinfo'
  },
  main: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "main"
  },
  visibility: Int,
  wind: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "wind"
  },
  clouds: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "clouds"
  },
  rain: {
    ype: mongoose.Schema.Type.ObjectId,
    ref: "rain"
  },
  sys: {
    type: mondoose.Schema.Type.ObjectId,
    ref: "sys"
  }

})
mongoose.model('weather', weatherModelSchema, 'weather') // weatherModelSchema

// MARK: - Weather Model Extensions.

/* edited 21/3 @ 11:52 ;
  - changed; 'called' model is now 'weather' model.
  - changed; 'weather' (nested) model is now 'moreinfo' model.
*/

// co-ordinates model
var coordModelSchema = new Schema({
  lon: Double, // City geo location, longitude
  lat: Double  // City geo location, latitude
})
mongoose.model('coord', coordModelSchema, 'coord')

// moreinfo model
var moreinfoModelSchema = new Schema({
  id: Int, // Weather condition id
  main: String, // Group of weather parameters (Rain, Snow, Extreme etc.)
  description: String, // Weather condition within the group
  icon: String // Weather icon id
})
mongoose.model('moreinfo', moreinfoSchema, 'moreinfo')

// main model
var mainModelSchema = new Schema({
  temp: Double,     // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  pressure: Double, // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
  humidity: Double, //  Humidity, %
  temp_min: Double, // Minimum temperature at the moment.
  temp_max: Double,  // Maximum temperature at the moment.
  sea_level: Double, // Atmospheric pressure on the sea level, hPa
  grnd_level: Double, // Atmospheric pressure on the ground level, hPa
})
mongoose.model('main', mainModelSchema, 'main')

// wind model
var windModelSchema = new Schema({
  speed: Double, // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
  deg: Double    // Wind direction, degrees (meteorological)
})
mongoose.model('wind', windModelSchema, 'wind')

// clouds model
var cloudsModelSchema = new Schema({
  all: Int  // Cloudiness, %
)
mongoose.model('clouds', cloudsModelSchema, 'clouds')

// rain model
var rainModelSchema = new Schema({
  1h: Double,  // Rain volume for the last 1 hour, mm
  3h: Double   // Rain volume for the last 3 hours, mm
})
mongoose.model('rain', rainModelSchema, 'rain')

// snow model
var snowModelSchema = new Schema({
  1h: Double, // Snow volume for the last 1 hour, mm
  3h: Double  // Snow volume for the last 3 hours, mm
})
mongoose.model('snow', snowModelSchema, 'snow')

// sys model
var sysModelSchema = new Schema({
  type: Int,       // Internal parameter
  id: Int,         // Internal parameter
  message: Double, // Internal parameter
  country: String  // Country code (GB, JP etc.)
  sunrise: Long,   // Sunrise time, unix, UTC
  sunset: Long     // Sunset time, unix, UTC
})
mongoose.model('sys', sysModelSchema, 'sys')


// weatherModel.js - Weather model exports
module.exports = mongoose.model('weather', weatherModelSchema);
