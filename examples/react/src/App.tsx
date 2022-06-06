import React from 'react';
import logo from './logo.svg';
import './App.css';
import easterBreaker from "easter-break";



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Break this page by click on button
        </p>
        <button onClick={easterBreaker}>Break me </button>
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
  );
}

export default App;
