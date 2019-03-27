'use strict';

var mongoose = require('mongoose'),
weather = mongoose.model('weather');
const get = require('../../db/get');

exports.by_city_name = function(req, res) {
//rem0ve  console.log("ya");
  get.weatherCurrent(req.params.cityName, function(err, response) {
    if (err) {
      res.json(response);
    } else {
      res.json(response);
    }
  });
};

exports.by_city_id = function(req, res) {
  weather.findByName(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};
