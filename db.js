// db.js - Written By Thomas McCoy
'use strict';

var mongoose = require('mongoose');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://rw:qwerty1234@weatherdb-1slka.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MondoDB - connection error:'));
db.once('open', function() {
  console.log("We've Connected MongoDB :)");
});
