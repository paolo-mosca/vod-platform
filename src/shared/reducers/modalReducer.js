// @flow

import { CREATE_USER_SUCCESS, LOGOUT, LOGIN_SUCCESS, LOST_PASSWORD_SUCCESS } from '../actions/user'
import { GO_TO_LOGIN, GO_TO_SIGNUP, GO_TO_LOST_PASSWORD, CLOSE_MODAL } from '../actions/modal'

const initialState = {
  status: 'closed',
}

const modalReducer = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        status: 'closed',
      }
    case LOGIN_SUCCESS:
      return {
        status: 'closed',
      }
    case LOST_PASSWORD_SUCCESS:
      return {
        status: 'closed',
      }
    case LOGOUT:
      return {
        status: 'closed',
      }
    case GO_TO_LOGIN:
      return {
        status: 'login',
      }
    case GO_TO_SIGNUP:
      return {
        status: 'signup',
      }
    case GO_TO_LOST_PASSWORD:
      return {
        status: 'lostPassword',
      }
    case CLOSE_MODAL:
      return {
        status: 'closed',
      }
    default:
      return state
  }
}

export default modalReducer
