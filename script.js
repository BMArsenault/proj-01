
var cityInputEl = "Hiking"

function fetchCity(parameter) {
    var baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/hiking.json?limit=5&access_token="
    var apiKey = "pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA"
    var url = baseUrl + apiKey + parameter; // not sure of order or exact url used

    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(renderSearchResults)
}

var searches = [];
var userInput = document.querySelector("#city");
var savedList = document.querySelector("#history");

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

// save to input to localStorage
var input = document.getElementById('saveServer').value;
localStorage.setItem('server', input);


//and to get the text back we would use
//(document.getElementById('saveServer').value = localStorage.getItem('server');)







//           Added links for mapbox
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Preview
// full styleUrl = https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt.html?title=view&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=true&fresh=true#9.55/37.278/-112.7652

// Map styled for hiking 
//style URL = mapbox://styles/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt
// Access Token = pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA
// third party = https://api.mapbox.com/styles/v1/bmarsenault/ckvz3cc8717zt15rzmqhb1yxt/wmts?access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA