import React from 'react';
import '../App.css';


const RecipeCard = ({ recipe }) => (
	<div key={recipe.id} className="RecipeCard">
		<a href={`recipes/${recipe.id}`}>
			<h1 className="card-title">{recipe.name}</h1>
		</a>
    <br></br>
    <img src="http://media.dish.allrecipes.com/wp-content/uploads/2014/11/Allrecipes-Super-Easy-Stir-Fry-1-Position-2.jpg" alt="" className="media" />
    <br></br>
    <div className="card-read">Read</div>
  </div>
)

export default RecipeCard;
