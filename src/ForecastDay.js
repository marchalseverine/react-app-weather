import React from "react";


export default function ForecastDay (props){
   console.log(props.forecastData)
    function day() {
        let date = new Date(props.forecastData.dt * 1000);
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
   function maxTemperature(){
       let temperature= Math.round(props.forecastData.temp.max);
   return `${temperature}ºC`;
    }

    function minTemperature(){
        let temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}ºC`
    }
    return(
      <div className="day" id="weather-forecast-day">
  <p>{day()}</p>
    <img className="icons" src=
   {props.forecastData.weather[0].icon}
   alt = {props.forecastData.weather[0].description} />
  
  <br />
  <div className="forecast-temperature">{maxTemperature()} | {minTemperature()}</div>
</div>


    )
}