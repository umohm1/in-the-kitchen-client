import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Recipes.css'
import RecipeCard from '../components/RecipeCard';
// import RecipeForm from './RecipeForm';
import { getRecipes } from '../actions/recipeActions';


class Recipes extends Component {

  componentDidMount() {
    this.props.getRecipes()
  }


  render() {
    return (
      <div className="RecipesContainer">
      <h1>Recipes</h1>
        {this.props.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} /> )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    recipes: state.recipes
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getRecipes: getRecipes}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
