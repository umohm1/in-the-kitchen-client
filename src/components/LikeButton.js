import React from 'react';
import { connect } from 'react-redux';
import { likeRecipe } from '../actions/recipeActions';


class LikeButton extends React.Component {

  handleOnClick = (e) => {
    const currentRecipe = this.props.recipe
    this.props.dispatch(likeRecipe(currentRecipe))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick} classname="likeB">Like {this.props.recipe.likes}</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.recipe
  }
}

export default connect(mapStateToProps)(LikeButton);
