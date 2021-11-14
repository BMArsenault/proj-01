var searchEl = document.getElementById("search");
var cityInputEl = document.getElementById("city-name");

// search function
var searchHandler = function(event) {
    debugger;
    event.preventDefault();
    var cityName = cityInputEl.value.trim();
    console.log(cityName);
    if (cityName) {
        saveSearch();
        getCurrentWeather();
        cityInputEl.value = "";
    } else {
        alert("Please search for a city.");
    }
};

// fetch and display location weather
var getCurrentWeather = function() {
    // format the github api url
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.value.trim() + '&appid=e58ce6fcd378144b93c4b6f45a5073c8';
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            displayWeather(data)
            getCityCoordinates(data);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function(error) {
        alert('Unable to connect to OpenWeather.');
      });
  };

  function displayWeather(data) {
    // temp,  wind, humidity
    var temp = Math.round(((data.main.temp - 273.15) * 1.8) + 32);
    var wind = data.wind.speed;
    var humidity = data.main.humidity;
    console.log(temp);
    console.log(wind);
    console.log(humidity);
    
    var tempEl = document.getElementById("temp");
    tempEl.innerHTML = temp;

    var windEl = document.getElementById("wind");
    windEl.innerHTML = wind;

    var humidityEl = document.getElementById("humidity");
    humidityEl.innerHTML = humidity;

    var cityNameEl = document.getElementById("search-term");
    cityNameEl.innerHTML = data.name + ", " + data.sys.country;

    if (data.length === 0) {
        cityInfoEl.textContent = "No city found.";
        return;
    };
}

function getCityCoordinates(data) {
    var longitude = data.coord.lon;
    var latitude = data.coord.lat;
    console.log(longitude);
    console.log(latitude);
    // generate map from coordinates
};

function saveSearch() {
    var cityList = JSON.parse(localStorage.getItem("City-List"));
    if (!cityList) {
        savedItems.push(cityName);        
        localStorage.setItem("City-List", JSON.stringify(savedItems));
    } else {
        cityList = JSON.parse(localStorage.getItem("City-List"));
        savedItems = cityList;
        savedItems.push(cityName);        
        localStorage.setItem("City-List", JSON.stringify(savedItems));
    };
};    

searchEl.addEventListener("submit", searchHandler);