import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css'
import RecipeCard from '../components/RecipeCard';
import RecipeForm from './RecipeForm';
import RecipeShow from './RecipeShow';
import { getRecipes } from '../actions/recipeActions';


class Recipes extends Component {

  componentDidMount() {
    this.props.getRecipes()
  }

  render() {
    return (
      <div className="RecipesContainer">
      <h1 id="recipeName">Recipes</h1>
        {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} type='recipes' /> )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    recipes: state.recipes
  })
}

export default connect(mapStateToProps, {getRecipes})(Recipes);
