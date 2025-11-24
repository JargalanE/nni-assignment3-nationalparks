// color schemes: #515a47(green), #d7be82(beige), #7a4419(brown), #755c1b(yellow-green), #400406(maroon)

import './App.css';
import Navbar from "./components/Navbar";
import Services from "./components/Services";


function App() {
  return (
    <div className='home-page-whole'>
      <Navbar />
      <div className='home-page'>
        <h1>Welcome to National Parks</h1>
        <p>Learn more about National Parks and explore all the services that the total of 63 parks provide.</p>
        <button className='start-button'
          onClick={() => {
            const section = document.getElementById("services");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}>
          Start
          </button>
      </div>
      <Services />
    </div>
    
  );
}

export default App;
