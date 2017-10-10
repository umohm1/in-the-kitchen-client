import React, { Component } from 'react';
import Recipes from './containers/Recipes';
import './App.css';
import { getRecipes } from '../actions/recipes';

const API_URL = process.env.REACT_APP_API_URL;

  componentDidMount() {
    fetch(`${API_URL}/recipes`)
      .then(res => res.json())
  }


  render() {
    return (
      <div className="App">
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
