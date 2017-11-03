import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import recipes from './reducers/recipes_reducer';
import recipeFormData from './reducers/recipeFormData';
import errors from './reducers/errors_reducer';


const reducers = combineReducers({
  recipes,
  recipeFormData,
  errors
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
