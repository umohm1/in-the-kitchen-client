import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Recipes.css'
import RecipeCard from '../components/RecipeCard';
import RecipeForm from './RecipeForm';
import { getRecipes } from '../actions/recipeActions';


class Recipes extends Component {

  componentDidMount() {
    this.props.getRecipes()
  }


  render() {
    return(
      <div className="RecipesContainer">

  }
}

const mapStateToProps = (state) => {
  return ({
    recipes: state.recipes
  })
}

export default connect(mapStateToProps, { getRecipes })(Recipes);
