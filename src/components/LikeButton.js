import React from 'react';


class LikeButton extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.likeRecipe} className="likeB">Likes {this.props.recipe.likes}</button>
      </div>
    )
  }
}


export default (LikeButton);
