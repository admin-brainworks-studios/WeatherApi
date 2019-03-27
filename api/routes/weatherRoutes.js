// weatherRoutes.js

'use strict';
module.exports = function(app) {


  var weather = require('../controllers/weatherController');


// direct weatherRoutes
  app.route('/weather/q=:cityName')
    .get(weather.by_city_name);

  app.route('/weather?id=:cityId')
      .get(weather.by_city_id);

  app.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

app.get("/weather", function (req, res){
  console.log("shubham batra");
   var keyword = req.query.city;
   console.log(keyword);
   res.send('You sent the name "' + keyword + '".');
});

/*  app.route('/weather?lat=:lat_&lon=:lon_')
      .get(weather.by_geo_coord);

  app.route('/weather?zip=:zipCode')
      .get(weather.by_zip_code);

// nested weatherRoutes
  app.route('/weather/listCached')
      .get(weather.list_all_cached);
      */

    };
