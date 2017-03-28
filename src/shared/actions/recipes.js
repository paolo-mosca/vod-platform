// @flow

import { createAction } from 'redux-actions'

// import { fetchRecipesEndpoint } from '../routes'

export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE'

export const fetchRecipesRequest = createAction(FETCH_RECIPES)
export const fetchRecipesSuccess = createAction(FETCH_RECIPES_SUCCESS)
export const fetchRecipesFailure = createAction(FETCH_RECIPES_FAILURE)

export const fetchRecipes = () => (dispatch: Function) => {
  dispatch(fetchRecipesRequest())
  // setTimeout(() => dispatch(fetchRecipesSuccess(recipesMock)), 700)
  // fetch(fetchRecipesEndpoint())
  //   .then((res) => {
  //     if (!res.ok) throw new Error(res.statusText)
  //     return res.json()
  //   })
  //   .then(fetchRecipesSuccess)
  //   .catch(fetchRecipesFailure)
}
