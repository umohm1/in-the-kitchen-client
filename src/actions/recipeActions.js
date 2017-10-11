const API_URL = process.env.REACT_APP_API_URL;

// Action Creators
const setRecipes = recipes => {
  return {
    type: 'GET_RECIPES',
    recipes
  }
}

// Async actions
export const getRecipes= () => {
  return dispatch => {
    return fetch(`${API_URL}/posts`)
    .then(res => res.json())
    .then(recipes => dispatch(setRecipes(recipes)))
    .catch(error => console.log(error));
  }
}
