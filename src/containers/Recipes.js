import React from 'react';

const Recipes = (props) => (
  <div>
  <h1>Recipes</h1>
    {props.recipes.map(recipe =>
      <div key={recipe.id} className="RecipeCard">
      <h2>{recipe.title}</h2>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
      <p>Cook Time: {recipe.cook_time}</p>
      </div>
    )}
  </div>
);

export default Recipes;
