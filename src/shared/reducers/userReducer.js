// @flow

import { CREATE_USER_SUCCESS, SIGNOUT, LOGIN_SUCCESS } from '../actions/user'

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
    case SIGNOUT:
      return {}
    default:
      return state
  }
}

export default userReducer
