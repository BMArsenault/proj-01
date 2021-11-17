var searches = [];
var savedList = document.getElementById("#history");
var currentCity = document.getElementById("#searched-city");


const url = 'http://dev.virtualearth.net/REST/v1/LocalSearch/?query=Locations=${query}&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl';
function fetchCity(city) {
    
    var baseUrl = "http://dev.virtualearth.net/REST/v1/Locations?q=";
    var endPoint = "&output=xml&key=";
    var apiKey = "Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl";
    var url = baseUrl + city + endPoint + apiKey;

    fetch(url)
    .then(response => response.json())
    .then((renderSearchResults) => {
        console.log(renderSearchResults)
}

// function renderSearchResults(result) {

//     currentCity.innerHTML = ""

//     var myMap = document.getElementById("cityMap")
//     var iframe = document.createElement("iframe")
//     iframe.classList("map")
//     iframe.setAttribute("src", "http://dev.virtualearth.net/REST/v1/Locations?q=${parameter}&output=xml&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl")
//     iframe.appendChild(myMap)

// }



// // add eventlistener to button
const button = document.getElementById("searchbtn");

button.addEventListener("click", savedCity);


//  store and get city to and from localStorage
function getCity() {
    return localStorage.getItem("searchedCity")
}

function savedCity() {
    var city = document.getElementById("searched-city").value;

    localStorage.setItem("searchCity", city);
    // console.log("Clicked Button");
}





// national park maps
// var baseUrl = "https://developer.nps.gov/";
// var endPoint = "api/v1/parks";
// var apiKey = "o1FOO1q63Y41fwWArlMIJN1hREzMFioFeTTpACSt";










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

