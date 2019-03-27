'use strict';

var mongoose = require('mongoose'),
weather = mongoose.model('weather');
const get = require('../../db/get');

exports.by_city_name = function(req, res) {
console.log("ya");
  get.weatherCurrent("Melbourne", function(err, response) {
    if (err) {
      res.send(err);
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
