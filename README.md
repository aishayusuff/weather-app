# Weather App
## Overview
__Weather App__ is a simple vanilla JavaScript application that enables users to search for information on weather in specific cities and/or countries. The app fetches utilises the OpenWeatherMap API and displays the **current temperature**, **humidity**, and **wind speed** for the queried city/country.

- [Features](#features)
- [Technology Used](#technology-used)
- [Getting Started](#getting-started)
- [Limitations](#limitations)

## Features
- Search for weather information by **city/country** name
- Display city/country **name**,**current temperature**, **humidity**, and **wind speed**
- Responsive design for mobile and desktop devices

## Technology Used
- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Fetch API for making HTTP requests
- OpenWeatherMap API to obtain real-time weather information
- Webpack for bundling assets

## Getting Started
__Weather App was built using windows so remember to modify the commands according to your local environment.

### Clone the Repository
Clone the repository and change directory into the program folder:

    git clone https://github.com/aishayusuff/weather-app.git
    cd weather-app

### Install Dependencies
Use the command below to install the neccessary dependencies for this app:

    npm install
  
### Create a `.env` file in the root directory and add your OpenWeatherMap API key:
Open an account on [OpenWeatherMap API](https://openweathermap.org/) and obtain your API key - which you can then store in the `.env` file: 

    API_KEY = "your_api_key"

### Build Project
Build your project locally using the command:

    npm run build

### Launch Project
Finally, open the `index.html` file (in the **src** directory) on your preferred brower. The project was originally built using Google Chrome browser.


## Usage
- Enter the name of the **city/country** whose weather you want to check in the search input field.
- Click the **search** button or press **Enter** key to fetch and display the weather information for the entered city/country.

## Limitations
- Due to security concerns, the app does not deploy to platforms like Netlify, as protecting the API key in a .env file is challenging in that environment.
- Currently, if the user inputs a name that is not a recognized city or country, the app will not provide weather information. This is an area for improvement, and future iterations of the app could include better error handling and suggestions for valid city or country names.
