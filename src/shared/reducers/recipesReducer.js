// @flow

import { FETCH_RECIPES, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE,
  FETCH_RECIPE_DETAILS, FETCH_RECIPE_DETAILS_SUCCESS, FETCH_RECIPE_DETAILS_FAILURE } from '../actions/recipes'

const initialState = {
  list: [],
  isLoadingList: false,
  loadingListError: null,
  detail: {},
  isLoadingDetail: false,
  loadingDetailError: null,
}

const recipesReducer = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        isLoadingList: true,
        loadingListError: null,
      }
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        isLoadingList: false,
        list: action.payload,
      }
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        isLoadingList: false,
        loadingListError: action.payload,
      }
    case FETCH_RECIPE_DETAILS:
      return {
        ...state,
        isLoadingDetail: true,
        loadingDetailError: null,
      }
    case FETCH_RECIPE_DETAILS_SUCCESS:
      return {
        ...state,
        isLoadingDetail: false,
        detail: Object.assign({}, state.detail, {
          [action.payload._id]: action.payload,
        }),
      }
    case FETCH_RECIPE_DETAILS_FAILURE:
      return {
        ...state,
        isLoadingDetail: false,
        loadingDetailError: action.payload,
      }
    default:
      return state
  }
}

export default recipesReducer
