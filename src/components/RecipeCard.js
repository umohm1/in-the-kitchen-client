import React from 'react';
import Link from 'react-router-dom';

const RecipeCard = ({ recipe }) => (
	<div key={recipe.id}>
		<a href={`recipes/${recipe.id}`}>
			<h3>{recipe.name}</h3>
		</a><br></br>
    <p>Ingredients: {recipe.ingredients}</p>
    <p>Directions: {recipe.directions}</p>
    <p>Cook Time: {recipe.cook_time}</p>
  </div>
)

export default RecipeCard;
