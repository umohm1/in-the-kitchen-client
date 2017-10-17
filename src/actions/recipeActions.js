import { resetRecipeForm } from './recipeForm';

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators
export const setRecipes = recipes => {
  return {
    type: 'GET_RECIPES',
    recipes
  }
}

export const addRecipe = recipe => {
  return {
    type:'CREATE_RECIPE_SUCCESS',
    recipe
  }
}

export const removeRecipe = recipe => {
  return {
    type: 'REMOVE_RECIPE_SUCCESS',
    recipe
  }
}

// Async actions
export const getRecipes= () => {
  return dispatch => {
    return fetch(`${API_URL}/recipes`)
    .then(res => res.json())
    .then(recipes => dispatch(setRecipes(recipes)))
    .catch(error => console.log(error));
  }
}

export const createRecipe = recipe => {
  return dispatch => {
    return fetch(`${API_URL}/recipes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({recipe: recipe})
    })
    .then(response => response.json())
    .then(recipe => {
      dispatch(addRecipe(recipe))
      dispatch(resetRecipeForm())
    })
    .catch(error => console.log(error))
  }
}

export const deleteRecipe = (recipe, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/recipes`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removeRecipe(recipe));
      routerHistory.replace('/recipes');
    })
    .catch(error => console.log(error))
  }
}
