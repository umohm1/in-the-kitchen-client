import React from 'react';
import { connect } from 'react-redux';
import { likeRecipe } from '../actions/recipeActions';


class LikeButton extends React.Component {

  handleOnClick = (e) => {
    const currentRecipe = this.props.recipe
  }

  render() {
    return (
      <div>
        <button onClick={this.props.likeRecipe} className="likeB">Likes {this.props.recipe.likes}</button>
      </div>
    )
  }
}


export default (LikeButton);
