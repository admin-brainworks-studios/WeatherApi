// weatherRoutes.js

'use strict';
module.exports = function(app) {


  var authToken = require('../controllers/authTokenController');


// direct weatherRoutes
  app.route('/api/generateToken')
    .get(authToken.generateApiKey);


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
