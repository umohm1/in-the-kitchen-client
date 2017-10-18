export default (state = [], action) => {
  switch(action.type) {
    case 'GET_RECIPES':
      return action.recipes;

    case 'CREATE_RECIPE':
      return state.concat(action.recipe);

    case 'REMOVE_RECIPE':
      return state.filter(recipe => recipe.id !== action.recipe.id);


    default:
    return state;
  }
}
