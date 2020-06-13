import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function LearnReact({ config }) {
  return (
    <div class='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* If it is not false or undefined */}
          {/* unwrap_or_else in Rust? */}
          {config ? config : "Window"}, Learn React
        </a>
      </header>
    </div>
  );
}
