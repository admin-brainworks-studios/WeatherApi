'use strict';
// external.js - Written By Thomas McCoy
// Get Requests (Parser) for MongoDB

// Required Imports
var Weather = require('../api/models/weatherModel');
var external = require('../external.js');
var post = require('./post');
var tools = require('../tools');

// Variables
const un_err = {cod: "404", message: "We Don't Know what went wrong :/"};

// Get Functions
// Create query for specified city, to the current hour.

module.exports.weatherCurrent = async function(_city, callback) {
  var query = {
    time: tools.currentTimeUnixZeroed(),
    name: _city.toLowerCase()
  };
  var postback = un_err;
  var error;
  Weather.findOne(query, function(err, queryResponse) {
    // if mongoDB responds with error - eg. not existent data.
    if (err || queryResponse === null) {
      // Source Will be from: OpenWeatherMap
      external.OWM_getWeatherCurrent(_city, function(error_, response) {
        // If error recieved from  OpenWeatherMap
        if (error_ !== null) {
          // If reponse variable contains no error explanation: use un_error (Unknown Error;)
          try {
            let a = response.cod !== null;
          } catch (err) { postback = un_err; }
          error = true;
        } else {
          // If No errors Sanatise and post
          postback = tools.json(response);
          if (postback.error) {
            postback = postback.error;
          } else {
            // Post Weather to MongoDB
            post.Weather(postback);
            postback.source = 'OpenWeatherMap';
          }
        }

        callback(error, postback);
      });
    } else {
      // Source Will be directly from: MongoDB
      postback = tools.json(queryResponse);
      if (postback.error) {
        postback = postback.error;
      } else {
        postback.source = 'MongoDB';
      }
      callback(error, postback);
    }
  });
};
