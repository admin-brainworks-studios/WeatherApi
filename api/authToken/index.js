// Required Imports
var mongoose = require("mongoose");
var db = mongoose.connection;
var authTokenModel = require("../models/authTokenModel");
var tools = require('../../tools');
var crypto = require("crypto");


module.exports.generateApiKey = async function(callback) {
  var postback = '{message: "There was a problem generating the API Key"}';
  try {
    var apiKeyId = crypto.randomBytes(16).toString("hex")
    var apiKeyObject = new authTokenModel({
    timestamp: tools.currentTimeUnix(),
    requests: 0,
    _id: apiKeyId
    });

    apiKeyObject.save(function(err) {
      if (err) {
      callback(err, postback);
    } else {
      callback(err, JSON.parse(`{"key": "${apiKeyId}"}`));
    }
    });
  } catch {
    console.log("couldnt save ");
    callback(true, postback);
  }
};

module.exports.isApiKeyValid = async function(token_, callback) {
  var collection = db.collection("tokens");
  var query = {
    _id: token_
  };
  collection.findOne(query, function(err, queryResponse) {
  if (err) { callback(false, "{message: API Key not Authenticating}"); return;}
  else {
    let date = new Date(queryResponse.timestamp)
    var ONE_HOUR = 60 * 60 * 1000; /* ms */
    if (((new Date) - myDate) < ONE_HOUR && queryResponse.requests < 5) {
      callback(true, null); return;
    }
  }
  });
};
