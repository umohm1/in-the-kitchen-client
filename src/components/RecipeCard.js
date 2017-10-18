import React, { Component } from 'react';
import Link from 'react-router-dom';

class RecipeCard extends Component {

  render() {
    const recipe = this.props.recipe

    return (
      <div className="RecipeCard">
      <p>{recipe.name}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
      <p>Cook Time: {recipe.cook_time}</p>
      <button className="edit">Edit</button>
      <br></br>
      <button className="delete">Delete</button>
      </div>
    )
  }
}

export default RecipeCard;
