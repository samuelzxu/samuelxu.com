import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello from Samuel Xu!
          </p>
          <a
            className="App-link"
            href="https://samuelzxu.github.io/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here's my Github
          </a>
        </header>
      </div>
    );
  }
}

export default App;
