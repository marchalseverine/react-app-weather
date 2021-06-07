
import React, { useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";


export default function CurrentWeather(props){
  let [dataWeather, setDataWeather] = useState ({ready : false});
  const [city, setCity] = useState (props.defaultCity);
  function handleResponse (response){
    setDataWeather ({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name ,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind:Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord
    });
  }
  function handleSubmit(event){
    event.preventDefault();
search(city);
  }
  function search(){
    const unit = "metric";
    const apiKey= "ef115c90a5cc57f88edb22a2c2a396c4";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
function handleCityChange(event){
  setCity (event.target.value);
}


if (dataWeather.ready) {
  return (
  <div className="current-weather">
   
 <FormattedDate date={dataWeather.date} />
  
    <form className="menu" onSubmit={handleSubmit}>
      <input type="Search"
      placeholder="Enter a city"
      autoFocus="on"
      onChange = {handleCityChange}/>
      <input type="submit" value= "Search" />
    </form>
<WeatherInfo data={dataWeather} />
    <hr />
   <Forecast coords={dataWeather.coordinates} dataWeather={dataWeather} />
      </div>
  );
} else {
   search();
    return (
     "Loading...")
  }
}