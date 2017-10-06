import React, { Component } from 'react';
import Recipes from './containers/Recipes';
import './App.css';

const recipes = []

class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipes recipes={recipes} />
      </div>
    );
  }
}

export default App;
