import React from 'react';
import Link from 'react-router-dom';
import '../App.css';


const RecipeCard = ({ recipe }) => (
	<div key={recipe.id} className="RecipeCard">
		<a href={`recipes/${recipe.id}`}>
			<h1 className="card-title">{recipe.name}</h1>
		</a>
    <br></br>
    <p>Ingredients: <h3>{recipe.ingredients}</h3></p>
    <br></br>

    
    <div className="card-read">Read</div>
  </div>
)

export default RecipeCard;
