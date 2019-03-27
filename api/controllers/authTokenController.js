'use strict';

var mongoose = require('mongoose'),
weather = mongoose.model('weather');
const authToken = require('../authToken/index.js');

exports.generateApiKey = function(req, res) {
//rem0ve  console.log("ya");
  authToken.generateApiKey(function(err, response) {
    if (err) {
      res.send(err);
    } else {
      res.json(response);
    }
  });
};

exports.isApiKeyValid = function (req, res) {
  //rem0ve  console.log("ya");
  authToken.isApiKeyValid(function(err, response) {
    if (err) {
      res.json(response);
    } else {
      res.json(response);
    }
  });

}
