import React from 'react';
import Link from 'react-router-dom';
import '../App.css';


const RecipeCard = ({ recipe }) => (
	<div key={recipe.id} className="RecipeCard">
		<a href={`recipes/${recipe.id}`}>
			<h3>{recipe.name}</h3>
		</a>
    <h3>Ingredients: {recipe.ingredients}</h3>
    <h3>Directions: {recipe.directions}</h3>
    <h3>Cook Time: {recipe.cook_time}</h3><br></br>
  </div>
)

export default RecipeCard;
