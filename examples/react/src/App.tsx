import React from 'react';
import logo from './logo.svg';
import './App.css';
import breakWebPage from "easter-break";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

      <button onClick={breakWebPage}>Break me </button>
      <h1>
        One really big header
      </h1>

    </div>
  );
}

export default App;
