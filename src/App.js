import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './containers/Recipes';
import RecipeForm from './containers/RecipeForm';
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
                <Route exact path='/recipes' component={Recipes}/>
                <Route exact path='/recipes/new' component={RecipeForm}/>
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
