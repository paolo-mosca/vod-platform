// @flow

import { CREATE_USER_SUCCESS, LOGOUT, LOGIN_SUCCESS, LOST_PASSWORD_SUCCESS } from '../actions/user'
import { GO_TO_LOGIN, GO_TO_SIGNUP, GO_TO_LOST_PASSWORD, CLOSE_MODAL, GO_TO_YEARLY_PAYMENT,
  GO_TO_LIFETIME_PAYMENT, TOGGLE_PAYMENT_MODE } from '../actions/modal'
import { NO_RECIPE_ACCESS } from '../actions/recipes'

const initialState = {
  status: 'yearlyPayment',
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
    case GO_TO_YEARLY_PAYMENT:
      return {
        status: 'yearlyPayment',
      }
    case GO_TO_LIFETIME_PAYMENT:
      return {
        status: 'lifetimePayment',
      }
    case TOGGLE_PAYMENT_MODE:
      return {
        status: state.status === 'lifetimePayment' ? 'yearlyPayment' : 'lifetimePayment',
      }
    case NO_RECIPE_ACCESS:
      return {
        status: 'promptSignup',
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
