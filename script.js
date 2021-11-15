var searches = [];

function fetchCity(parameter) {
    // mapbox.places/ allows us to search city instead of lat/long but does not show up on a webpage
    var baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    var endPoint = ".json?limit=5&access_token="
    var apiKey = "pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA"
    var url = baseUrl + parameter + endPoint + apiKey; // not sure of order or exact url used

    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(renderSearchResults)
}


var userInput = document.querySelector("#city");
var savedList = document.querySelector("#history");
var currentCity = document.querySelector("#searched-City");


// get a list of saved searches using local storage and create buttons
function getSearches() {
    savedList.innerHTML = "";
    for (var i = 0; i < searches.length; i++) {
        var search = searches[i];
        var div = document.createElement("div");
        var button = document.createElement("button");

        button.textContent = search;
        button.classList.add("btn");
        button.onClick = handleLiClick
        div.setAttribute("data-index", i);

        div.appendChild(button);
        savedList.appendChild(div);
    }
}

//  create a list with searched cities

// Have map post for the city we just searched
// Create iframe and post into HTML
function renderSearchResults(result) {
    currentCity.innerHTML = ""
    var loadMap = document.getElementById("cityMap")
    var iframe = document.createElement("iframe")
    iframe.setAttribute("src", "https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt/wmts?access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA")
    loadMap.appendChild(iframe)
}

document.getElementById("searchbtn").addEventListener("click", function() {
    loadMap.appendChild(iframe);
})



// save to input to localStorage to grab for weather and map
// var input = document.getElementById('saveServer').value;
// localStorage.setItem('server', input);

//and to get the text back we would use
//(document.getElementById('saveServer').value = localStorage.getItem('server');)







//           Added links for mapbox
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Map styled for hiking 
// full styleUrl = https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt.html?title=view&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=true&fresh=true#9.55/33.4484/112.0740

// style URL = mapbox://styles/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt
// Access Token = pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA
// Url w/ lat and long = https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt/wmts?access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA