import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="coder">
        <a
          href="https://github.com/marchalseverine/weather-app-react"
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
