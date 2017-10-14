export const updateRecipeFormData = recipeFormData => {
  return {
    type: 'UPDATED_RECIPE',
    recipeFormData
  }
}
export const resetRecipeForm = () => {
  return {
    type: 'RESET_RECIPE_FORM'
  }
}
