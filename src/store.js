import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const recipesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_RECIPES':
    return action.recipes;

    default:
    reutrn state;
  }
}

const reducers = combineReducers({
  recipes: recipesReducer
});

const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
