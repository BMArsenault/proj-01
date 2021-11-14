var searchCity = function () {
    // use input city from HTML along with API to search city
    let requestUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityInputEl}.json?limit=10&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA`;

    fetch(requestURL)
    .then(function (response) {
        if (response.ok) {
        response.json()
            .then(function (data) {
            console.log(data);
            return (data);
            })
        }
    })
};


document.getElementById("searchbtn").addEventListener("click", searchCity);


// MapBox Api

// https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}.json
// access token:  pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA


// placeTypePreferences: ['hiking', 'trailhead', 'hike']
// https://api.mapbox.com/styles/v1/bmarsenault/ckvyuahwl2m1s15pioyu4k5bi.html?title=view&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=true&fresh=true#14/37.2686/-112.9425
// mapbox://styles/bmarsenault/ckvyuahwl2m1s15pioyu4k5bi  pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA



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
