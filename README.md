# WeatherApi
node.js Solution

To Setup:
git clone https://github.com/admin-brainworks-studios/WeatherApi.git <br>
choose submit branch. <br>
npm install <br>

To Run Test Environment (Chai): <br>
npm test

  * authToken_tests<br>
    ✓ generateApiKey (will create and return an api key checking its character count for validation)<br>

    ✓ pinRequest (will add a request counter for generated api key and check for any errors)<br>

    ✓ isApiKeyValid (will check if the apiKey is valid)<br>

  * get_tests (housekeeping)<br>
    ✓ Delete MongoDB Data - Matching City 'melbourne' (housekeeping for following tests).<br>

  * get_tests<br>
    ✓ Test For OpenWeatherMap (will request and save data to mongodb and check if source came from 'OWM' due to data not being in mongoDB)<br>

    ✓ Test For MongoDB (will perform the same test but assumes that the source will be coming from mongoDB)<br>


To Run Normal RESTful Environment: <br>
npm start

<br>

Example Usage:

  Generate Token Key <br>
  http://127.0.0.1:3000/api/generateToken

  Test Token Key <br>
  http://127.0.0.1:3000/api/testToken=<TOKEN>

  Weather for City by Name (eg. Melbourne or Melbourne,Australia)
  http://127.0.0.1:3000/weather/q=<city>&token=<TOKEN>
  eg . http://127.0.0.1:3000/weather/q=melbourne&token=010834fda678a111d6881145e022cb06



- Thomas McCoy
