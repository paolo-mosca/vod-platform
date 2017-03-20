// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

import recipesReducer from '../shared/reducers/recipesReducer'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.recipes) {
    // flow-disable-next-line
    preloadedState.recipes = recipesReducer(undefined, {})
      .merge(plainPartialState.recipes)
  }
  return createStore(combineReducers({ recipes: recipesReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
