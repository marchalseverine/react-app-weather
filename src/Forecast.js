import React, {useState} from "react";
import ForecastDay from "./ForecastDay";
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
    <div className="forecast-day">
      <div className ="row">
        {forecastData.map(function(dailyForecast, index){

if (index < 5){

          return (
            <div className="col" key ={index}>

            <ForecastDay forecastData={dailyForecast} />
             </div>
          );
}
        })}
      
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