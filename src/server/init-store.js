// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import recipesReducer from '../shared/reducers/recipesReducer'
import userReducer from '../shared/reducers/userReducer'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.recipes) {
    // flow-disable-next-line
    preloadedState.recipes = Object.assign(
      {},
      // flow-disable-next-line
      recipesReducer(undefined, {}),
      plainPartialState.recipes,
    )
  }

  if (plainPartialState && plainPartialState.inputs) {
    // flow-disable-next-line
    preloadedState.inputs = Object.assign(
      {},
      // flow-disable-next-line
      userReducer(undefined, {}),
     plainPartialState.inputs,
   )
  }

  const reducers = combineReducers({
    recipes: recipesReducer, user: userReducer, form: formReducer,
  })
  return createStore(reducers, preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
