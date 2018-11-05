import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css'
import RecipeCard from '../components/RecipeCard';
import RecipeForm from './RecipeForm';
import RecipeShow from './RecipeShow';
import { getRecipes } from '../actions/recipeActions';
import { Switch, Route } from 'react-router-dom';
import { likeRecipe } from '../actions/recipeActions';


class Recipes extends Component {

  componentDidMount() {
    this.props.getRecipes()
  }

  render() {
    const { recipes, match } = this.props;
    const sortedRecipes = recipes.sort(function (a, b) {
      return b.likes - a.likes;
    })

    return (
      <div>
        <Switch>
          <Route exact path={match.url}
            render={() =>
              <div className="RecipesContainer">
                <h1 className="recipeName">Recipes</h1>
                {sortedRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
              </div>
            }
          />
          <Route exact path="/recipes/new" component={RecipeForm} />
          <Route
            path="/recipes/:recipeId"
            component={RecipeShow}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    recipes: state.recipes
  })
}

export default connect(mapStateToProps, { getRecipes, likeRecipe })(Recipes);
