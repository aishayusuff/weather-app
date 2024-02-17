const apiKey = "c9904cf1b5886b2c9ca6da7b370dad0c";
const city = "Doha";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;

const searchInput = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");

const checksWeather = async function (city) {
  const response = await fetch(`${url}&q=${city}`);
  const data = await response.json();

  //updates html values with dynamic data
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
};

//Updates checksWeather function with city searched in input
searchBtn.addEventListener("click", () => {
  console.log(searchInput.value);
  checksWeather(searchInput.value);
});

checksWeather("Ibadan");
