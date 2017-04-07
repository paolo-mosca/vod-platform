// @flow

import { CREATE_USER_SUCCESS, GO_TO_LOGIN, GO_TO_SIGNUP, GO_TO_LOST_PASSWORD,
  CLOSE_MODAL, LOGIN_SUCCESS, LOST_PASSWORD_SUCCESS } from '../actions/user'

const initialState = {
  modalStatus: 'closed',
  name: null,
  email: null,
}

const inputs = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        modalStatus: 'closed',
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        modalStatus: 'closed',
      }
    case LOST_PASSWORD_SUCCESS:
      return {
        ...state,
        modalStatus: 'closed',
      }
    case GO_TO_LOGIN:
      return {
        ...state,
        modalStatus: 'login',
      }
    case GO_TO_SIGNUP:
      return {
        ...state,
        modalStatus: 'signup',
      }
    case GO_TO_LOST_PASSWORD:
      return {
        ...state,
        modalStatus: 'lostPassword',
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalStatus: 'closed',
      }
    default:
      return state
  }
}

export default inputs
