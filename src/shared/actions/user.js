// @flow

import { createAction } from 'redux-actions'
import { SubmissionError } from 'redux-form'

import routes from '../routes'
import http from '../utils/http'

export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const createUserRequest = createAction(CREATE_USER)
export const createUserSuccess = createAction(CREATE_USER_SUCCESS)
export const createUser = (user: Object) => (dispatch: Function) => {
  dispatch(createUserRequest(user))
  return http(routes.createUserEndpoint(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => dispatch(createUserSuccess(res)))
    .catch((err) => {
      throw new SubmissionError({ _error: err })
    })
}

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginRequest = createAction(LOGIN)
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const login = ({ email, password }: Object) => (dispatch: Function) => {
  dispatch(loginRequest({ email, password }))
  return http(routes.loginEndpoint(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  .then(res => dispatch(loginSuccess(res)))
  .catch((err) => {
    throw new SubmissionError({ _error: err })
  })
}

export const LOST_PASSWORD = 'LOST_PASSWORD'
export const LOST_PASSWORD_SUCCESS = 'LOST_PASSWORD_SUCCESS'
export const lostPasswordRequest = createAction(LOST_PASSWORD)
export const lostPasswordSuccess = createAction(LOST_PASSWORD_SUCCESS)
export const lostPassword = ({ email }: Object) => (dispatch: Function) => {
  dispatch(lostPasswordRequest())
  return http(routes.lostPasswordEndpoint(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(res => dispatch(lostPasswordSuccess(res)))
    .catch((err) => {
      throw new SubmissionError({ _error: err })
    })
}

export const LOGOUT = 'LOGOUT'
export const logout = createAction(LOGOUT)

export const SYNC_USER_FROM_LS = 'SYNC_USER_FROM_LS'
export const syncUserFromLs = createAction(SYNC_USER_FROM_LS)

export const SUBSCRIBE = 'SUBSCRIBE'
export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS'
export const SUBSCRIBE_FAILURE = 'SUBSCRIBE_FAILURE'
export const subscribeRequest = createAction(SUBSCRIBE)
export const subscribeSuccess = createAction(SUBSCRIBE_SUCCESS)
export const subscribeFailure = createAction(SUBSCRIBE_FAILURE)
export const subscribe = ({ token, mode }: Object) => (dispatch: Function) => {
  dispatch(subscribeRequest())
  return http(routes.subscribeEndpoint(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, mode }),
  })
  .then(res => dispatch(subscribeSuccess(res)))
  .catch(err => dispatch(subscribeFailure(err)))
}
