"use strict";

// Get Weather Test Call
//var db = require('./db');

const get = require('./db/get');

//db.get.weatherCurrent("Melbourne", function(err, response) {});
get.weatherCurrent("Melbourne", function(err, response) {});


module.exports = "test"
