<<<<<<< HEAD
import { createStore } from 'redux'
// import rootReducer from './reducers/index'

import ingredients from './reducers/ingredients'
import recipes from './reducers/recipes'
import recipeForm from './reducers/recipeForm'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({ingredients, recipes, recipeForm});

export function configureStore(){
  return createStore(rootReducer)
=======
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });

export function configureStore(){
  return createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
}

export const store = configureStore()
