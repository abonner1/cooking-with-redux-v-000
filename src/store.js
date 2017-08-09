import { createStore } from 'redux'
// import rootReducer from './reducers/index'

import ingredients from './reducers/ingredients'
import recipes from './reducers/recipes'
import recipeForm from './reducers/recipeForm'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({ingredients, recipes, recipeForm});

export function configureStore(){
  return createStore(rootReducer)
}

export const store = configureStore()
