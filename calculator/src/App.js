import React, { Component } from 'react';
import './style.css'
import './App.css';
import Buttons from './Buttons';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Buttons/>
      </div>
    );
  }
}

export default App;
