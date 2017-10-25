import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchRecipe } from '../actions/recipeActions';
import { deleteRecipe } from '../actions/recipeActions';
import RecipeForm from './RecipeForm';
import RecipeCard from '../components/RecipeCard';
import Recipes from './Recipes';


class RecipeShow extends Component {
    constructor(props) {
      super(props);

      this.state = {
        recipe: {name: ''}
      };
    }


  componentWillMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
	}

  handleOnChange = (e) => {
    e.preventDefault();
    const { deleteRecipe, recipe, history } = this.props;
    deleteRecipe(recipe);
  }

  render() {
    const recipe = this.props.recipe[0]
    return (
      <div>
      {recipe? recipe.name : ''}
      </div>
    )
  }
}
//inheriting match from this.props this is a POJO that contains the current url.

const mapStateToProps = (state) => {
  return ({
    recipe: state.recipes
  })
}

// mapStateToProps() function to pulls the recipes property from our store's state and attaches it to the props of this component

//incorporate recipe.js into recipeShow
// no need to fetch a recipe because I don't have it yet. Call to the API to create the recipeId

export default connect(mapStateToProps, {fetchRecipe})(RecipeShow);
