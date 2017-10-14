export default (state = [], action) => {
  switch(action.type) {
    case 'GET_RECIPES':
      return action.recipes;

    case 'CREATE_RECIPE_SUCCESS':
      return state.concat(action.recipe);


    default:
    return state;
  }
}
