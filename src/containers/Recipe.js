import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions/recipeActions';


class Recipe extends Component {

  handleOnChange = (e) => {
    e.preventDefault();
    const { deleteRecipe, recipe, history } = this.props;
    deleteRecipe(recipe);
  }


  render () {
    const recipe = this.props.recipe

    return (
      <div className="RecipeCard">
      <p>{recipe.name}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
      <p>Cook Time: {recipe.cook_time}</p>
      <button className="edit">Edit</button>
      <br></br>
      <button onClick={this.handleOnChange} id="deleteButton" type="submit">Delete</button><br/>
      </div>
    )
  }
}

  const mapStateToProps = state => {
  return {
    recipe: state.recipe
  }
}

export default connect(mapStateToProps, {deleteRecipe})(Recipe);
