"use strict";

var mongoose = require("mongoose"),
  weather = mongoose.model("weather");
const get = require("../../db/get");
const authToken = require("../authToken/index.js");

exports.by_city_name = function(req, res) {
  authToken.isApiKeyValid(req.params.tokenKey, function(err, response) {
    if (err) {
      res.json(response);
    } else {
      authToken.pinRequest(req.params.tokenKey, function(err){});

      get.weatherCurrent(req.params.cityName, function(err, response) {
        res.json(response);
      });
    }
  });
};

exports.by_city_id = function(req, res) {
  authToken.isApiKeyValid(req.params.tokenKey, function(err, response) {
    if (err) {
      res.json(response);
    } else {
      authToken.pinRequest(req.params.tokenKey, function(err){});

      weather.findByName(req.params.taskId, function(err, task) {
        res.json(response);
      });
    }
  });
};
