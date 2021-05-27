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

if (loaded){
  console.log(forecastData);
  return (
  <div className="forecast">
  <hr />
<div className="grid">
<div className="day1" id="weather-forecast-day">
  <p>{forecastData[0].dt}</p>
  <span className="icons">{forecast[0].weather[0].icon}</span>
  <br />
  <div className="forecast-temperature">{forecastData[0].temp}ºC</div>
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