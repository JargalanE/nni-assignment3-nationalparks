// color schemes: #515a47(green), #d7be82(beige), #7a4419(brown), #755c1b(yellow-green), #400406(maroon)

import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";


function App() {

  return (
    <div className='home-page-whole'>
      <Navbar />
      <div className='home-page'>
        <h1>Welcome to National Parks</h1>
        <p>Learn more about National Parks and explore all the services that the total of 63 parks provide.</p>
        <button className='start-button'
          onClick={() => {
            const section = document.getElementById("activities-section");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}>
          Start
          </button>
      </div>
      <Activities />
    </div>
    
  );
}

export default App;
