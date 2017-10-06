import React from 'react';

const Recipes = (props) => (
  <div className="RecipesContainer">
    <h1>Recipes</h1>
    {props.recipes.map(recipe =>
      <div className="RecipeCard">
      <h2>{recipe.title}</h2>
      <p>{recipe.ingredients}</p>
      <p>{recipe.directions}</p>
      <p>{recipe.cook_time}</p>
      </div>
    )}
  </div>
);

export default Recipes;
