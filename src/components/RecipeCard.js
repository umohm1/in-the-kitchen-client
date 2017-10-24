import React, { Component } from 'react';
import Link from 'react-router-dom';

class RecipeCard extends Component {

  render() {
    const recipe = this.props.recipe

    return (
      <div key={recipe.id} className="RecipeCard">
      <p>{recipe.name}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
      <p>Cook Time: {recipe.cook_time}</p>
      </div>
    )
  }
}

export default RecipeCard;
