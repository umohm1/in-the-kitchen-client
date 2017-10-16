import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/Navbar';
import Recipes from './containers/Recipes';
import './App.css';
import Home from './components/Home';
import RecipesPage from './components/recipespage';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Container>
            <Route exact path='/' component={Home}/>
            <Route exact path='/recipes' component={RecipesPage}/>
          </Container>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
