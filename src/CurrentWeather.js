
import React, { useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props){
  let [dataWeather, setDataWeather] = useState ({ready : false});
  function handleResponse (response){
    setDataWeather ({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: props.defaultCity,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind:Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

    });
  }

if (dataWeather.ready) {
  return (
  <div className="current-weather">
   <div className="container">
     <div className="row">
     <div className="col-4">
 <FormattedDate date={dataWeather.date} />
     </div>
     <div className="col-8">
    <form className="menu">
      <input type="Search"
      placeholder="Enter a city"
      autoFocus="on"/>
      <input type="submit" value= "Search" />
    </form>
    </div>
    </div>
    </div>
    <div className="current-city text-center text-capitalize">
        <h1>{dataWeather.city}</h1>
        <h2>{dataWeather.description}</h2>
        <img
              src={dataWeather.icon}
              alt={dataWeather.description}
            />
            </div>
            <div className="current-description">
      <div className="grid">
        <div>
          <span className="wind">
            <p>Wind</p>
          </span>
          <span>
            <h3 id="wind-speed">{dataWeather.wind} km/h</h3>
          </span>
        </div>
        <div>
          <span className="weather-temperature" id="temp">
            <p>Temperature</p>
            <h3>
              <span className="tempC TempF" id="temperature">
                {dataWeather.temperature}
              </span>
              ºC | ºF
            </h3>
          </span>
        </div>
        <div>
          <span id="humidity">
            <p>Humidity</p>
            <span>
              <h3 id="humidity-percent">{dataWeather.humidity}%</h3>
            </span>
          </span>
        </div>
      </div>
    </div>
      </div>
  );
} else {
    const unit = "metric";
    const apiKey= "ef115c90a5cc57f88edb22a2c2a396c4";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return (
  "loading...");
  }
}