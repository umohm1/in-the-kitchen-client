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

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
	}

  render() {
    let recipe = this.props.recipe[0];
    const {deleteRecipe, history, match} = this.props;

    return (
    <div className='recipeShow'>
      {recipe ? (
      <div>
        <h1>{recipe.name}</h1>
        <p><h3>{recipe.ingredients}</h3></p>
        <p><h3>{recipe.directions}</h3></p>
        <p><h3>{recipe.cook_time}</h3></p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    <button onClick={() => deleteRecipe(recipe.id, history)}>
      Delete
    </button>
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

export default connect(mapStateToProps, {fetchRecipe, deleteRecipe})(RecipeShow);
