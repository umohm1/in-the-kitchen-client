export default (state = {
  name: '',
  ingredients: '',
  directions: '',
  cook_time: 0
}, action) =>

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.recipeFormData

      default:
        return state;
  }
}
