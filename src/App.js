import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const {babies = [{name: 'Joaquim'}]} = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2>Maternidade Bello</h2>
        </div>
        <p className="App-intro">
          Bebês registrados:
          <br /><br />
          {babies.map(baby => <div>{baby.name}</div>)}
        </p>
      </div>
    );
  }
}

export default App;
