# WeatherApi
node.js Solution

To Setup:
git clone https://github.com/admin-brainworks-studios/WeatherApi.git
choose submit branch. 
npm install

To Run Test Environment (Chai):
npm test

  * authToken_tests
    ✓ generateApiKey (will create and return an api key checking its character count for validation)
    ✓ pinRequest (will add a request counter for generated api key and check for any errors)
    ✓ isApiKeyValid (will check if the apiKey is valid)

  * get_tests (housekeeping)
    ✓ Delete MongoDB Data - Matching City 'melbourne' (housekeeping for following tests).

  * get_tests
    ✓ Test For OpenWeatherMap (will request and save data to mongodb and check if source came from '*OWM' due to data not being in mongoDB)
    ✓ Test For MongoDB (will perform the same test but assumes that the source will be coming from mongoDB)
    
    
To Run Normal RESTful Environment:
npm start
 


- Thomas McCoy 
