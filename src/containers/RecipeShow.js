import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchRecipe } from '../actions/recipeActions';


class RecipeShow extends Component {

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    const { recipe, match} = this.props;

    return (
      <Route exact path={`${match.url}/:recipeId`} component={Recipe} />
      render={() =>
        <div id="recipeShow">
        )} />
        </div>
    )
  }
}
