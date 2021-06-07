import React from "react";
import WeatherIcon from "./WeatherIcon";
import ConvertTemperature from "./ConvertTemperature";

export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
<div className="current-city text-center text-capitalize">
        <h1>{props.data.city}</h1>
        <h2>{props.data.description}</h2>
        <WeatherIcon code={props.data.icon} />
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
             
              <ConvertTemperature celsius={props.data.temperature} />
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