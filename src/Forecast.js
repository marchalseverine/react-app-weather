import React from "react";
import "./Forecast.css";


export default function Forecast (){
    return (
        <div className="forecast">
          <hr />
      <div className="grid">
        <div className="day1" id="weather-forecast-day">
          <p>Tues</p>
          <span className="icons">🌤</span>
          <br />
          <div className="forecast-temperature">23ºC</div>
        </div>

        <div className="day2" id="weather-forecast-day">
          <p>Wed</p>
          <span className="icons">🌤</span>
          <br />
          <div className="forecast-temperature">23ºC</div>
        </div>

        <div className="day3" id="weather-forecast-day">
          <p>Thu</p>
          <span className="icons">🌤</span>
          <br />
          <div className="forecast-temperature">23ºC</div>
        </div>
        <div className="day4" id="weather-forecast-day">
          <p>Fri</p>
          <span className="icons">🌤</span>
          <br />
          <div className="forecast-temperature">23ºC</div>
        </div>

        <div className="day5" id="weather-forecast-day">
          <p>Sat</p>
          <span className="icons">🌤</span>
          <br />
          <div className="forecast-temperature">23ºC</div>
        </div>
      </div>
      <hr />
    </div>

    );
}