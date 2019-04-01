// weatherRoutes.js - Written By Thomas McCoy

'use strict';
module.exports = function(app) {

  const weather = require('../controllers/weatherController');

// Weather Routes
  app.route('/weather/q=:cityName&token=:tokenKey')
    .get(weather.by_city_name);

  app.route('/weather?id=:cityId')
      .get(weather.by_city_id);

  app.get('/', function(req, res) {
	res.json({ message: 'hooray! Welcome to the WeatherAPI' });
});


};
