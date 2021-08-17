import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App :) </h1>
        <p> This is really working!</p>
      </div>
    );
  }
}

export default App;
