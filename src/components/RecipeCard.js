import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { likeRecipe } from '../actions/recipeActions';

class RecipeCard extends Component {

	render() {

		const { recipe, recipes } = this.props;

		return (
			<div key={recipe.id} className="RecipeCard">
				<a href={`recipes/${recipe.id}`}>
					<h1 className="card-title">{recipe.name}</h1>
				</a>
		    <br></br>
		    <img src="http://media.dish.allrecipes.com/wp-content/uploads/2014/11/Allrecipes-Super-Easy-Stir-Fry-1-Position-2.jpg" alt="" className="media" />
		    <br></br>
		    <div className="card-read">Read</div>
				<button onClick={() => {this.props.likeRecipe(recipe, recipes)}}>Like</button> {this.props.recipe.likes}
		  </div>
		)
	}
}


const mapStateToProps = state => {
	return {
		recipes: state.recipes
	}
}



export default connect(mapStateToProps, {likeRecipe})(RecipeCard);
