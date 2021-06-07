import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}º`;
  }
  return (
    <div className="day" id="weather-forecast-day">
      <p>{day()}</p>
      <WeatherIcon code={props.forecastData.weather[0].icon} size={36} />

      <br />
      <div className="forecast-temperature">
        <span className="max-temp"> {maxTemperature()}</span> |{" "}
        <span className="min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
