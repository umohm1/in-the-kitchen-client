const API_URL = process.env.REACT_APP_API_URL;

// Action Creators
const setRecipes = recipes => {
  return {
    type: 'GET_RECIPES',
    recipes
  }
}

const addRecipe = recipe => {
  return {
    type:'CREATE_RECIPE_SUCCESS',
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
    .then(recipe => dispatch(addRecipe(recipe)))
    .catch(error => console.log(error))
  }
}
