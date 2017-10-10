import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Recipes.css'
import RecipeCard from '../components/RecipeCard';
import RecipeForm from './RecipeForm';

class Recipes extends Component {
  render() {
    return(
      <div className="RecipesContainer">
      <h1>Recipes</h1>
        {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} /> )}
        <RecipeForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    recipes: state.recipes
  })
}

export default connect(mapStateToProps)(Recipes);
