var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
  params: {lat: '<REQUIRED>', lon: '<REQUIRED>'},
  headers: {
    'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
    'x-rapidapi-key': '84debd863fmshfa58b4e1f335a6ap154ee5jsn70f312469b28'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});