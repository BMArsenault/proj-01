
// cityInputEl = document.querySelector("#city");


var cityInputEl = "Salt Lake City, UT"

var requestURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityInputEl}.json?limit=5&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=true&fresh=true#14/37.2686/-112.9425`;

fetch(requestURL)
    .then((res) => res.json())
.then(result => console.log(requestURL))
.catch(error => console.log('error:', error));

// document.getElementById("searchbtn").addEventListener("click", searchCity);

// Preview
// https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt.html?title=view&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=true&fresh=true#9.55/37.278/-112.7652
// style URL = mapbox://styles/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt
// Access Token = pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA


// third party = https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt/wmts?access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA