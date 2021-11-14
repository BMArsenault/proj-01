// MapBox Api

// https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}.json
// access token:  pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA

cityInputEl = document.querySelector("#city");


var cityInputEl = "piestawa peak"

var requestURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityInputEl}.json?limit=15&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA`;



fetch(requestURL)
    .then((res) => res.json())
.then(function (data) {
    console.log(data);
    console.log(data.properties.hiking);
});




// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
//   params: {lat: '33.4484° N', lon: '112.0740° W'},
//   headers: {
//     'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
//     'x-rapidapi-key': '84debd863fmshfa58b4e1f335a6ap154ee5jsn70f312469b28'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
