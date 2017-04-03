// @flow

import { UPDATE_EMAIL_INPUT, CREATE_USER, CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE } from '../actions/user'

const initialState = {
  name: null,
  nameInput: '',
  email: null,
  emailInput: '',
  isCreatingUser: false,
  createUserError: null,
}

const inputs = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case UPDATE_EMAIL_INPUT:
      return {
        ...state,
        emailInput: action.payload,
      }
    case CREATE_USER:
      return {
        ...state,
        isCreatingUser: true,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        nameInput: '',
        email: action.payload.email,
        emailInput: '',
        isCreatingUser: false,
      }
    case CREATE_USER_FAILURE:
      return {
        ...state,
        isCreatingUser: false,
        createUserError: action.payload,
      }
    default:
      return state
  }
}

export default inputs
