import React from 'react';

const RecipeCard = ({ recipe }) => (
  <div key={recipe.id} className="RecipeCard">
  <p>{recipe.name}</p>
  <p>Ingredients: {recipe.ingredients}</p>
  <p>Directions: {recipe.directions}</p>
  <p>Cook Time: {recipe.cook_time}</p>
  </div>
)

export default RecipeCard;
