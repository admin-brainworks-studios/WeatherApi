// weatherRoutes.js

'use strict';
module.exports = function(app) {


  var authToken = require('../controllers/authTokenController');


  // API Key Routes
  app.route('/api/generateToken')
    .get(authToken.generateApiKey);

      app.route('/api/testToken=:token')
        .get(authToken.isApiKeyValid);
    };
