import React, { Component } from 'react';
import Recipes from './containers/Recipes';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipesIndex from './components/RecipesIndex';
import RecipesForm from './components/RecipesForm';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <div>
              <Navbar/>
              <Container>
                <Route exact path='/' component={Home}/>
                <Route exact path='/recipes' component={RecipesIndex}/>
                <Route exact path='/recipes/new' component={RecipesForm}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
              </Container>
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
