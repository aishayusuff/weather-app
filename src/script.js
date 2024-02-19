const apiKey = process.env.API_KEY; //added the env content to Netlify environment variable
console.log(apiKey)

const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;


const searchInput = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");
const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

const checksWeather = async function (city) {
  const response = await fetch(`${url}&q=${city}`);
  const data = await response.json();

  //Adds opacity to target elements for transition effects
  cityEl.classList.add("opacity-0");
  tempEl.classList.add("opacity-0");
  humidityEl.classList.add("opacity-0");
  windEl.classList.add("opacity-0");

  setTimeout(() => {
    //updates html values with dynamic data
    cityEl.innerHTML = data.name;
    tempEl.innerHTML = `${Math.round(data.main.temp)}°C`;
    humidityEl.innerHTML = `${data.main.humidity}%`;
    windEl.innerHTML = `${data.wind.speed} km/h`;

    //removes opacity
    cityEl.classList.remove("opacity-0");
    tempEl.classList.remove("opacity-0");
    humidityEl.classList.remove("opacity-0");
    windEl.classList.remove("opacity-0");
  }, 600);
};

//Updates checksWeather function with city searched in input
searchBtn.addEventListener("click", () => {
  checksWeather(searchInput.value);
});

//Updates checksWeather function with city searched when ENTER key pressed
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checksWeather(searchInput.value);
  }
});
