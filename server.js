"use strict";

const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");
  require('./db');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const weatherRoutes = require("./api/routes/weatherRoutes"); //importing route
const authTokenRoutes = require("./api/routes/authTokenRoutes");
weatherRoutes(app); //register the route
authTokenRoutes(app);

app.listen(port);

console.log("RESTful API server started on: " + port);


module.exports = app;
