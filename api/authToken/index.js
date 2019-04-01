// authToken/index.js - Written By Thomas McCoy
// AuthToken for handling api keywords

/*  * Generating key
    * Update Request Count
    * Check if Api Key is Valid
*/

// API Key Variables
const hours_valid = 1;
const request_limit = 5;

// Required Imports
const authTokenModel = require("../models/authTokenModel");
const tools = require("../../tools");
const crypto = require("crypto");

module.exports.generateApiKey = async function(callback) {
  var postback = {message: "There was a problem generating the API Key"};
  try {
    const apiKeyId = crypto.randomBytes(16).toString("hex");
    const apiKeyObject = new authTokenModel({
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

module.exports.pinRequest = async function(token, callback) {
 try {
   // eslint-disable-next-line no-unused-vars
    authTokenModel.findOneAndUpdate({ _id: token }, { $inc: { requests: 1 } }, {new: true },function(err, _) {
      if (err) {
        callback(err)
      } else {
        callback(null);
      }
    });
  } catch(err) {
      callback(err)
    }
}

module.exports.isApiKeyValid = async function(token, callback) {
  let query = {
    _id: token
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
