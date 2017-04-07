// @flow

import { createAction } from 'redux-actions'

export const GO_TO_LOGIN = 'GO_TO_LOGIN'
export const goToLogin = createAction(GO_TO_LOGIN)
export const GO_TO_SIGNUP = 'GO_TO_SIGNUP'
export const goToSignup = createAction(GO_TO_SIGNUP)
export const GO_TO_LOST_PASSWORD = 'GO_TO_LOST_PASSWORD'
export const goToLostPassword = createAction(GO_TO_LOST_PASSWORD)
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const closeModal = createAction(CLOSE_MODAL)
