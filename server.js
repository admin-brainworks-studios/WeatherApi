"use strict";

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./api/models/weatherModel'), //created model loading here
  bodyParser = require('body-parser');

  var db = require('./db');
  var external = require('./external');
  var test = require('./test')

  module.exports = app;




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/weatherRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

//module.exports = server;
