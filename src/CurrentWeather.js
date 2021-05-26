
import React, { useState} from "react";
import axios from "axios";

export default function CurrentWeather(){
  let [city, setCity] = useState (" ");
  let [weather, setWeather] = useState (" ");


  function displayWeather(response){
    setWeather(
      <div className="current-weather">
        <h1>{city}</h1>
        <h2>{response.data.weather[0].description}</h2>
        <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
            <div className="current-description">
      <div className="grid">
        <div>
          <span className="wind">
            <p>Wind</p>
          </span>
          <span>
            <h3 id="wind-speed">{Math.round(response.data.wind.speed)} km/h</h3>
          </span>
        </div>
        <div>
          <span className="weather-temperature" id="temp">
            <p>Temperature</p>
            <h3>
              <span className="tempC TempF" id="temperature">
                {Math.round(response.data.main.temp)}
              </span>
              ºC | ºF
            </h3>
          </span>
        </div>
        <div>
          <span id="humidity">
            <p>Humidity</p>
            <span>
              <h3 id="humidity-percent">{Math.round(response.data.main.humidity)}%</h3>
            </span>
          </span>
        </div>
      </div>
    </div>
      </div>
    )
  }

  function handleSubmit (event){
    event.preventDefault();
    let unit = "metric";
    let apiKey= "ef115c90a5cc57f88edb22a2c2a396c4";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
    
  }
  return (
    <div className ="current-weather">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={updateCity}/>
        <input type ="submit" value ="Search"/>
      </form>
      {weather}

    </div>
  )
}