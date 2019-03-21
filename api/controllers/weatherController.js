'use strict';

var mongoose = require('mongoose'),
weather = mongoose.model('weather');


exports.by_city_name = function(req, res) {
  weather.findByName(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.by_city_id = function(req, res) {
  weather.findByName(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
