import React from "react";


export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
<div className="current-city text-center text-capitalize">
        <h1>{props.data.city}</h1>
        <h2>{props.data.description}</h2>
        <img
              src={props.data.icon}
              alt={props.data.description}
            />
            </div>
            <div className="current-description">
      <div className="grid">
        <div>
          <span className="wind">
            <p>Wind</p>
          </span>
          <span>
            <h3 id="wind-speed">{props.data.wind} km/h</h3>
          </span>
        </div>
        <div>
          <span className="weather-temperature" id="temp">
            <p>Temperature</p>
            <h3>
              <span className="tempC TempF" id="temperature">
                {props.data.temperature}
              </span>
              ºC | ºF
            </h3>
          </span>
        </div>
        <div>
          <span id="humidity">
            <p>Humidity</p>
            <span>
              <h3 id="humidity-percent">{props.data.humidity}%</h3>
            </span>
          </span>
        </div>
      </div>
    </div>
</div>

    );

}