import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'components/button.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TMM</h1>
        </header>
        <p className="App-intro">
        <code>tmm</code> 
        <Button />
        </p>

      </div>
    );
  }
}

export default App;
