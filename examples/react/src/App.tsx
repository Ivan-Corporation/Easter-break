import React from 'react';
import './App.css';
import EasterBreaker from './EasterBreaker'
import { RepositoryMetrics } from 'repository-metrics';
import logo from './profile.png'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Break this page! but be careful...
        </p>
        <EasterBreaker/>
        <br/>
        <a
          className="App-link"
          href="https://github.com/Ivan-Corporation/Easter-break"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

<hr/>
        <RepositoryMetrics 
      owner='Ivan-Corporation' 
      repo='Easter-break' 
      theme='dark' 
      />
      </header>

  
    
    </div>
  );
}

export default App;
