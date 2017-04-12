// @flow

import { CREATE_USER_SUCCESS, LOGOUT, LOGIN_SUCCESS, SYNC_USER_FROM_LS } from '../actions/user'

const initialState = {}

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
    default:
      return state
  }
}

export default userReducer
