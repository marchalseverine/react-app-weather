import React, {useState} from "react";
import "./Forecast.css";

import axios from "axios";


export default function Forecast (props){

  let [loaded, setLoaded] = useState (false);
  let [forecastData, setForecastData] = useState (null);

  function handleResponseForecast (response){
    setForecastData(response.data.daily);
    setLoaded (true);
}

function day() {
let date = new Date(forecastData[0].dt);
let day = date.getDay();
let days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
]
  return days[day];
}

if (loaded){
  console.log(forecastData);
  return (
  <div className="forecast">
  <hr />
<div className="grid">
<div className="day1" id="weather-forecast-day">
  <p>{day()}</p>
  
    <img className="icons" src=
   {props.dataWeather.icon}
   alt = {props.dataWeather.description} />

  
  <br />
  <div className="forecast-temperature">{Math.round(props.dataWeather.temperature)}ºC</div>
</div>

<div className="day2" id="weather-forecast-day">
  <p>Wed</p>
  <span className="icons">🌤</span>
  <br />
  <div className="forecast-temperature">{Math.round(forecastData[1].temp.day)}ºC</div>
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

</div>
  );

} else {

let keyApi= "ef115c90a5cc57f88edb22a2c2a396c4";
let lat = props.coords.lat;
let lon = props.coords.lon;
let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric`

axios.get(apiUrl).then(handleResponseForecast);
   
return (null);

}
}