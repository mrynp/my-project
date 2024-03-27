let apiKey = "94c379409f43ba9697t5c0of6330a837";

function checkWeather(response) {
  let city = response.data.city;
  let cityDescription = response.data.condition.description;
  let cityTemp = Math.round(response.data.temperature.current);
  let cityHumidity = response.data.temperature.humidity;
  let cityWind = response.data.wind.speed;
  let iconUrl = response.data.condition.icon_url;

  let cityElement = document.querySelector("#current-city");
  let descriptionValue = document.querySelector(".description");
  let tempValue = document.querySelector(".current-temperature-value");
  let humidityValue = document.querySelector(".humidity-value");
  let windValue = document.querySelector(".wind-value");
  let iconValue = document.querySelector(".current-temperature-icon");

  cityElement.innerHTML = city;
  descriptionValue.innerHTML = cityDescription;
  tempValue.innerHTML = cityTemp;
  humidityValue.innerHTML = cityHumidity;
  windValue.innerHTML = cityWind;
  iconValue.innerHTML = `<img src="${iconUrl}">`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let query = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

  axios.get(apiUrl).then(checkWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
