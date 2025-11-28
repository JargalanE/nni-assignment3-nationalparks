// color schemes: #515a47(green), #d7be82(beige), #7a4419(brown), #755c1b(yellow-green), #400406(maroon)

import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Activities />
      <About />
      <Contact />
      
    </div>
    
  );
}

export default App;
