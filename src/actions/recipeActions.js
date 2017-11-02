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
    type:'CREATE_RECIPE',
    recipe
  }
}

export const removeRecipe = recipe => {
  return {
    type: 'REMOVE_RECIPE',
    recipe
  }
}

export const addLikes = recipe => {
  return {
    type: 'LIKE_RECIPE',
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

export const fetchRecipe = (recipeId) => {
	return dispatch => {
		return fetch(`${API_URL}/recipes/${recipeId}`)
			.then(response => response.json())
			.then(recipe => {
				dispatch(setRecipes([recipe]));
			})
			.catch(error => console.log(error));
	}
}

export const createRecipe = (recipe, routerHistory) => {
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
      routerHistory.replace(`/recipes/${recipe.id}`)
    })
    .catch(error => console.log(error))
  }
}

export const deleteRecipe = (recipeId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/recipes/${recipeId}`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removeRecipe(recipeId));
      routerHistory.replace('/recipes');
    })
    .catch(error => console.log(error))
  }
}

export const likeRecipe = (recipe) => {
  console.log(recipe)
  const updatedRecipe = Object.assign({}, recipe, {likes: recipe.likes + 1})
  return dispatch => {
    return fetch(`${API_URL}/recipes/${recipe.id}`, {
      method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({recipe: updatedRecipe})
      })
      .then(response => response.json())
      .then(recipe => {
        dispatch(addLikes(recipe));
      })
    .catch(error => console.log(error))
  }
}
