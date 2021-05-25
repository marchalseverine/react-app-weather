import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p class="coder">
        <a
          href="https://github.com/marchalseverine/WeatherApp-MS-V2"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        by Séverine Marchal hosted in{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          {" "}
          Netlify{" "}
        </a>
      </p>
    </footer>
  );
}
