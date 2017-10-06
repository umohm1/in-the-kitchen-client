import React, { Component } from 'react';
import Recipes from './containers/Recipes';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/recipes`)
      .then(res => res.json())
      .then(res => this.setState {recipes}))
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
