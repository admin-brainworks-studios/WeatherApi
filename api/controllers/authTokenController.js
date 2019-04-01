// authTokenController.js - Written By Thomas McCoy

'use strict';

const authToken = require('../authToken/index.js');

exports.generateApiKey = function(req, res) {
  authToken.generateApiKey(function(err, response) {
    if (err) {
      res.send(err);
    } else {
      res.json(response);
    }
  });
};

exports.isApiKeyValid = function (req, res) {
  authToken.isApiKeyValid(req.params.token, function(err, response) {
    if (err) {
      res.json(response);
    } else {
      res.json(response);
    }
  });

}
