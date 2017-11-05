const initialState = {
  name: '',
  ingredients: '',
  directions: '',
  cook_time: 0,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_RECIPE':
      return action.recipeFormData

    case 'RESET_RECIPE_FORM':
      return initialState;

      default:
        return state;
  }
}
