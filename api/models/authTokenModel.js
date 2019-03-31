// authTokenModel.js - Written By Thomas McCoy

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// authToken model
var authTokenModelSchema = new Schema({
 timestamp: Number,        // Time Of Token Generation and
 requests: Number,         // Request Count
_id: String,               // Token
}, {
  versionKey: false
}); // We can set versionKey to false because _id generation is time wraped.


// authTokenModel.js - authToken model exports
module.exports = mongoose.model('tokens', authTokenModelSchema);
