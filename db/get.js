// external.js - Written By Thomas McCoy
// Get Requests (Parser) for MongoDB
"use strict";

// Required Imports
var mongoose = require("mongoose");
var db = mongoose.connection;
var Weather = require("../api/models/weatherModel");
var external = require("../external.js");
var queries = db.collection("queries");
var post = require("./post");
var tools = require("../tools");
const crypto = require("crypto");

// Variables
const un_err = '{cod: "404", message: "We Don\'t Know what went wrong :/"}';

// Get Functions
// Create query for specified city, to the current hour.

module.exports.weatherCurrent = async function(_city, callback) {
  var collection = db.collection("weather");
  var query = {
    time: tools.currentTimeUnixZeroed(),
    name: _city.toLowerCase()
  };
  Weather.findOne(query, function(err, queryResponse) {
    var postback = un_err;
    var error;
    // if mongoDB responds with error - eg. not existent data.
    if (err || queryResponse == null) {
      // Source Will be from: OpenWeatherMap
      console.log("Source Will be from: OpenWeatherMap"); // Rem0ve
      external.OWM_getWeatherCurrent(_city, function(error_, response) {
        // If error recieved from  OpenWeatherMap
        if (error_ || response == null || response.cod != 200) {
          // If reponse variable contains no error explanation: use un_error (Unknown Error;)
          if (response != null) {
            postback = un_err;
          }
          error = true;
        } else {
          // If No errors Sanatise and post
          postback = tools.json(response);
          if (postback.error != null) {
            postback = postback.error;
          } else {
            postback.source = "OpenWeatherMap";
          }
        }
        // Save data to DB and postback
        callback(error, postback);
        // Post Weather to MongoDB
        post.Weather(postback);
      });
    } else {
      // Source Will be directly from: MongoDB
      console.log("Source Will be from: MongoDB"); // Rem0ve
      postback = tools.json(queryResponse);
      if (postback.error != null) {
        postback = postback.error;
      } else {
        postback.source = "MongoDB";
        delete postback.time;
      }
      // Use data from DB and postback
      callback(error, postback);
    }
  });
};
