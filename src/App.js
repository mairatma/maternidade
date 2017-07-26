import React, { Component } from 'react';
import {gql, graphql} from 'react-apollo';
import './App.css';

class App extends Component {
  render() {
    const {data: {babies = [], loading, error}} = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2>Maternidade Bello</h2>
        </div>
        <p className="App-intro">
          Bebês registrados:
          {!loading && babies.map(baby => {
            return (
              <div key={baby.id} style={{margin: 50}}>
                <img src={baby.photoUri} width="200"/>
                <div>{baby.name}</div>
              </div>
            )
          })}
          {loading && <span>Loading...</span>}
          {error && <div>Error fetching babies: {error.message}</div>}
        </p>
      </div>
    );
  }
}

const query = gql`
  {
    babies {
      id
      name
      photoUri
    }
  }
`

export default graphql(query)(App);
