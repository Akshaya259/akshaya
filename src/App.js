import logo from './logo.svg';
import React from "react";
import './App.css';
import Card from "./Card";
import image1 from "./oppenheimer.jpg";
import image2 from "./AngryBirds.png";
import image3 from "./Barbie.jpg";

function App() {
  return (
    <div className="App">
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>created React akshaya</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      <h1>Movie Description</h1>
      <div className="card-container">
        <Card
          moviename="Openheimer"
          ratings="Ratings are 4.2"
          image={image1}
        />
        <Card
          moviename="Angry Birds"
          ratings="Ratings are 4.0"
          image={image2}
        />
        <Card
          moviename="Barbie"
          ratings="Ratings are 3.8"
          image={image3}
        />
      </div>
    </div>
  );
}

export default App;
