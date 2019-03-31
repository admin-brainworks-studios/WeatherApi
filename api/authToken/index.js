// authToken/index.js - Written By Thomas McCoy
// AuthToken for handling api keywords

/*  * Generating key
    * Update Request Count
    * Check if Api Key is Valid
*/

// API Key Variables
var hours_valid = 1;
var request_limit = 5;

// Required Imports
var authTokenModel = require("../models/authTokenModel");
var tools = require("../../tools");
var crypto = require("crypto");

module.exports.generateApiKey = async function(callback) {
  var postback = {message: "There was a problem generating the API Key"};
  try {
    var apiKeyId = crypto.randomBytes(16).toString("hex");
    var apiKeyObject = new authTokenModel({
      timestamp: tools.currentTimeUnix(),
      requests: 0,
      _id: apiKeyId
    });

    apiKeyObject.save(function(err) {
      if (err) {
        callback(err, postback);
      } else {
        callback(err, {key: `${apiKeyId}`});
      }
    });
  } catch(err) {
    callback(true, postback);
  }
};

module.exports.pinRequest = async function(_token, callback) {
 try {
    authTokenModel.findOneAndUpdate({ _id: _token }, { $inc: { requests: 1 } }, {new: true },function(err, _) { // eslint-disable-line no-unused-vars
      if (err) {
        console.log("error Updating request count");
        callback(err)
      } else {
        callback(null);
      }
    });
  } catch(err) {
      callback(err)
    }
}

module.exports.isApiKeyValid = async function(token_, callback) {
  var query = {
    _id: token_
  };
  authTokenModel.findOne(query, function(err, queryResponse) {
    if (queryResponse === null || err) {
      callback(true, {message: "API Key not Authenticating"});
      return;
    } else {
      let date = new Date(queryResponse.timestamp);
      var ONE_HOUR = 60 * 60 * hours_valid; /* ms */
      if (tools.currentTimeUnix() - date > ONE_HOUR) {
        callback(true, {message: "API Key has expired"});
      } else {
        if (queryResponse.requests > (request_limit - 1)) {
          callback(true, {message: "API Key limit has been exceeded"});
        } else {
          callback(false, {
            message: `API Key is Working, with ${5 -
              queryResponse.requests} requests left`
          });
        }
      }
    }
  });
};
