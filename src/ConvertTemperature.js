import React, {useState} from "react";
import "./ConvertTemperature.css";

export default function ConvertTemperature(props){
    const [unit, setUnit] = useState ("celsius");
    function displayFahrenheit(event){
        event.preventDefault();
        setUnit ("fahrenheit")
    }
    function displayCelcius (event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
return (
    <div className="celsius-temp">
        <span className="celsius">
            {Math.round(props.celsius)}
        </span>
        <span className="unit">
            ºC |  {" "}
            <a className="link-convertion" href="/" onClick={displayFahrenheit}>ºF</a>
        </span>
    </div>
)} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <div className="fahrenheit-temp">
        <span className="fahrenheit">
            {Math.round(fahrenheit)}
        </span>
        <span className="unit"> <a className="link-convertion" href="/" onClick={displayCelcius}>ºC</a> | ºF </span>
    </div>
    )
}
}