// @flow

import 'isomorphic-fetch'
import { createAction } from 'redux-actions'

import routes from '../routes'

export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE'

export const fetchRecipesRequest = createAction(FETCH_RECIPES)
export const fetchRecipesSuccess = createAction(FETCH_RECIPES_SUCCESS)
export const fetchRecipesFailure = createAction(FETCH_RECIPES_FAILURE)

export const fetchRecipes = () => (dispatch: Function) => {
  dispatch(fetchRecipesRequest())
  fetch(routes.fetchRecipesEndpoint())
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then(res => dispatch(fetchRecipesSuccess(res)))
    .catch(err => dispatch(fetchRecipesFailure(err.message)))
}

export const FETCH_RECIPE_DETAILS = 'FETCH_RECIPE_DETAILS'
export const FETCH_RECIPE_DETAILS_SUCCESS = 'FETCH_RECIPE_DETAILS_SUCCESS'
export const FETCH_RECIPE_DETAILS_FAILURE = 'FETCH_RECIPE_DETAILS_FAILURE'

export const fetchRecipeDetailsRequest = createAction(FETCH_RECIPE_DETAILS)
export const fetchRecipeDetailsSuccess = createAction(FETCH_RECIPE_DETAILS_SUCCESS)
export const fetchRecipeDetailsFailure = createAction(FETCH_RECIPE_DETAILS_FAILURE)

export const fetchRecipeDetails = (id: string) => (dispatch: Function) => {
  dispatch(fetchRecipeDetailsRequest())
  fetch(routes.fetchRecipeDetailsEndpoint(id))
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then(res => dispatch(fetchRecipeDetailsSuccess(res)))
    .catch(err => dispatch(fetchRecipeDetailsFailure(err.message)))
}
