export default (state = [], action) => {
  switch(action.type) {
    case 'GET_RECIPES':
      return action.recipes;

    case 'CREATE_RECIPE':
      return state.concat(action.recipe);

    case 'REMOVE_RECIPE':
      return state.filter(recipe => recipe.id !== action.recipeId);

    case 'LIKE_RECIPE':
      return state.map((recipe) => {
        if (recipe.id === action.recipe.id) {
          return action.recipe
        } else {
          return recipe
        }
      });


    default:
    return state;
  }
}
