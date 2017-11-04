import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './containers/Recipes';
import RecipeForm from './containers/RecipeForm';
import RecipeShow from './containers/RecipeShow';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Navbar/>
              <Container>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/recipes' component={Recipes}/>
                <Route exact path='/recipes/new' component={RecipeForm}/>
                <Route path='/recipes/:recipeId' component={RecipeShow}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
              </Switch>
              </Container>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
