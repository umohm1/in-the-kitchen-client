import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const {deleteRecipe, history} = this.props;

    return (
    <div className='recipeShow'>
      {recipe ? (
      <div>
        <h1>{recipe.name}</h1>
        <h3><p>Ingredients: {recipe.ingredients}</p></h3>
        <h3><p>Directions: {recipe.directions}</p></h3>
        <h3><p>Cook Time:  {recipe.cook_time}</p></h3>
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
