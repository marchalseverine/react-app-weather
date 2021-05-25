import React from "react";

export default function CurrentWeather(){
    return (
        <div className="current-weather>">
        <div className="date">
          <h4> Today, 21:33 </h4>
          </div>
          <div className="current-city">
      <h1>
        {" "}
        <strong> Valencia </strong>{" "}
      </h1>
      </div>
      <div className="current-temp">
      <h2> Partly cloudy </h2>{" "}
      </div>
      <div className="weather-icon">
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="cloud" />
 
        </div>
        <div className="current-description">
      <div className="grid">
        <div>
          <span className="wind">
            <p>Wind</p>
          </span>
          <span>
            <h3 id="wind-speed">5 km/h</h3>
          </span>
        </div>
        <div>
          <span className="weather-temperature" id="temp">
            <p>Temperature</p>
            <h3>
              <span className="tempC TempF" id="temperature">
                29
              </span>
              ºC | ºF
            </h3>
          </span>
        </div>
        <div>
          <span id="humidity">
            <p>Humidity</p>
            <span>
              <h3 id="humidity-percent">25%</h3>
            </span>
          </span>
        </div>
      </div>
    </div>
         </div>
        
      );
}