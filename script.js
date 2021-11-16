// var searches = [];
// var savedList = document.getElementById("#history");
// var currentCity = document.getElementById("#searched-city");


fetch("http://dev.virtualearth.net/REST/v1/LocalSearch/?query=Locations=seattle&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl")
.then((response) => {
    console.log("We got response");
    console.log(response);
    return response.json();
})
.then((jsonData) => {
    console.log("We got our data");
    console.log(jsonData)
});

// function fetchCity(city) {
    
//     var baseUrl = "http://dev.virtualearth.net/REST/v1/Locations?q=";
//     var endPoint = "&output=xml&key=";
//     var apiKey = "Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl";
//     var url = baseUrl + ${city} + endPoint + apiKey;

//     fetch(url)
//     .then(response => response.json());
        
//     })
//     .then(renderSearchResults) => {
//         console.log("We got our data")
//         console.log(renderSearchResults)
// }
// }

// function renderSearchResults(result) {

//     currentCity.innerHTML = ""

//     var myMap = document.getElementById("cityMap")
//     var iframe = document.createElement("iframe")
//     iframe.classList("map")
//     iframe.setAttribute("src", "http://dev.virtualearth.net/REST/v1/Locations?q=${parameter}&output=xml&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl")
//     iframe.appendChild(myMap)

// }










// // add eventlistener to button
// const button = document.getElementById("searchbtn");

// button.addEventListener("click", savedCity);


// //  store and get city to and from localStorage
// function getCity() {
//     return localStorage.getItem("searchedCity")
// }

// function savedCity() {
//     var city = document.getElementById("searched-city").value;

//     localStorage.setItem("searchCity", city);
//     // console.log("Clicked Button");
// }
















//  create a list with searched cities

// Have map post for the city we just searched
// Create iframe and post into HTML

// save to input to localStorage to grab for weather and map
// var input = document.getElementById('saveServer').value;
// localStorage.setItem('server', input);

//and to get the text back we would use
//(document.getElementById('saveServer').value = localStorage.getItem('server');)



// bing maps
// var url = "http://dev.virtualearth.net/REST/v1/Locations?q="
// parameter = city searched
// var endPoint = "&output=xml&key=""
// var apiKey = "Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl"
// http://dev.virtualearth.net/REST/v1/Locations?q=seattle&output=xml&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl

//           Graveyard
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// national park maps
// var baseUrl = "https://developer.nps.gov/";
// var endPoint = "api/v1/parks";
// var apiKey = "o1FOO1q63Y41fwWArlMIJN1hREzMFioFeTTpACSt";


// mapbox maps
// "https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt/wmts?access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA"
// Map styled for hiking 
// full styleUrl = https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt.html?title=view&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=true&fresh=true#9.55/33.4484/112.0740
// style URL = mapbox://styles/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt
// Access Token = pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA
// Url w/ lat and long = https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt/wmts?access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA"