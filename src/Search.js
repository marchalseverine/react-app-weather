import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="menu">
      <form id="city-input">
        <input
          autoComplete="off"
          autoFocus="on"
          className="city"
          id="search-a-city"
          placeholder="Search for a city..."
          type="text"
        />
        <input id="search-button" type="submit" value="🔎" />
      </form>
      <button className="button" type="button" id="location-button">
        <span className="location" role="img">
          📍
        </span>
      </button>
    </div>
  );
}
