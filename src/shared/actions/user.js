// @flow

import { createAction } from 'redux-actions'

import routes from '../routes'

export const UPDATE_EMAIL_INPUT = 'UPDATE_EMAIL_INPUT'
export const updateEmailInput = createAction(UPDATE_EMAIL_INPUT)

export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

export const createUserRequest = createAction(CREATE_USER)
export const createUserSuccess = createAction(CREATE_USER_SUCCESS)
export const createUserFailure = createAction(CREATE_USER_FAILURE)

export const createUser = (user: Object) => (dispatch: Function) => {
  dispatch(createUserRequest(user))
  fetch(routes.createUserEndpoint(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then((res) => {
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
  })
  .then(res => dispatch(createUserSuccess(res)))
  .catch(err => dispatch(createUserFailure(err)))
}
