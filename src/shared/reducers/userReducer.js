// @flow

import { CREATE_USER_SUCCESS, LOGOUT, LOGIN_SUCCESS, SYNC_USER_FROM_LS,
  SUBSCRIBE, SUBSCRIBE_SUCCESS, SUBSCRIBE_FAILURE } from '../actions/user'

const initialState = {
  isSubmitting: false,
  submittingError: null,
}

const userReducer = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    case LOGOUT:
      return {}
    case SYNC_USER_FROM_LS:
      return {
        ...state,
        ...action.payload,
      }
    case SUBSCRIBE:
      return {
        ...state,
        isSubmitting: true,
      }
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isSubmitting: false,
      }
    case SUBSCRIBE_FAILURE:
      return {
        ...state,
        submittingError: action.payload,
        isSubmitting: false,
      }
    default:
      return state
  }
}

export default userReducer
