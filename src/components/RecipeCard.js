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
				<img src="https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7baeff72dbf865f4ca4267cbe433b4cb&auto=format&fit=crop&w=1650&q=80" alt="" className="media" />
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
