import React, { useState } from "react";
import axios from "axios";

// const url = "https://api.openweathermap.org/data/2.5/weather?lat=25.031797&lon=55.191002&appid=9f5f7a36e1ab5440db689a0e77e6a9f2"

function App() {
  return (
    <div className="app">
      <div className="container"></div>
      <div className="top">
        <div className="location">
          <p>Dubai</p>
        </div>
        <div className="temp">
          <h1>304.05°F</h1>
        </div>
        <div className="description">
          <p>Clear</p>
        </div>
      </div>
      <div className="bottom"></div>
      <div className="feels">
        <p>304.7°F</p>
      </div>
      <div className="humidity">
        <p>45%</p>
      </div>
      <div className="wind">
        4.63 MPH
      </div>
    </div>
  );
}

export default App;
