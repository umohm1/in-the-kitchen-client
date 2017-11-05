import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../actions/recipeActions';
import { deleteRecipe } from '../actions/recipeActions';
import RecipeForm from './RecipeForm';
import RecipeCard from '../components/RecipeCard';
import Recipes from './Recipes';
import LikeButton from '../components/LikeButton';
import { likeRecipe } from '../actions/recipeActions';



class RecipeShow extends Component {


  handleOnClick = () => {
    this.props.likeRecipe(this.props.recipe[0])
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
        <h1 className="recipeName">{recipe.name}</h1>
        <h3><p>Ingredients: <br></br>{recipe.ingredients}</p></h3>
        <h3><p>Directions: <br></br>{recipe.directions}</p></h3>
        <h3><p>Cook Time:  {recipe.cook_time}</p></h3>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    <br></br>
    <button onClick={() => deleteRecipe(recipe.id, history)}>
      Delete
    </button>
    {recipe ? <LikeButton recipe={recipe} likeRecipe={this.handleOnClick}/> : 'some error happened'}
    </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    recipe: state.recipes
  })
}

export default connect(mapStateToProps, {fetchRecipe, deleteRecipe, likeRecipe})(RecipeShow);
