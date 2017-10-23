import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import { fetchRecipe } from '../actions/recipeActions';
import deleteRecipe from '../actions/recipeActions';


class RecipeShow extends Component {

  findRecipe = recipeId => {
    return this.props.recipes.find(recipe => {
      return recipe.id == recipeId
    })
  }

  handleOnChange = (e) => {
    e.preventDefault();
    const { deleteRecipe, recipe, history } = this.props;
    deleteRecipe(recipe);
  }

  render() {
    const { recipe, match } = this.props;

    return (
      <Route exact path={`${match.url}/:recipeId`} component={Recipe} />
      render={() =>
        <div id="recipeShow">
        )} />
        </div>
        const recipe = this.props.recipe
        // {debugger}
        return (
          <div className="RecipeCard">
          <p>{recipe.name}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Directions: {recipe.directions}</p>
          <p>Cook Time: {recipe.cook_time}</p>
          <button className="edit">Edit</button>
          <br></br>
          <button onClick={this.handleOnChange} id="deleteButton" type="submit">Delete</button><br/>
          </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
return {
  recipe: state.recipe,
  recipeId: ownProps.match.params.recipeId
 }
}

//incorporate recipe.js into recipeShow
// no need to fetch a recipe because I don't have it yet. Call to the API to create the recipeId

export default connect(mapStateToProps, {deleteRecipe})(RecipeShow);
