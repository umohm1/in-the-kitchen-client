import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { recipes } = this.props;
    const sortedRecipes = recipes.sort(function(a, b) {
            return a - b;
          })

    return (
      <div className="RecipesContainer">
      <h1 className="recipeName">Recipes</h1>
        {sortedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} /> )}
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
