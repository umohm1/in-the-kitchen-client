import React from 'react';
import './Recipes.css'

const Recipes = (props) => (
  <div>
  <h1>Recipes</h1>
    {props.recipes.map(recipe =>
      <div key={recipe.id} className="RecipeCard">
      <p>Name: {recipe.name}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
      <p>Cook Time: {recipe.cook_time}</p>
      </div>
    )}
  </div>
);

export default Recipes;
