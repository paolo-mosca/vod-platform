// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'
import { SAY_HELLO, SAY_HELLO_ASYNC, SAY_HELLO_ASYNC_SUCCESS, SAY_HELLO_ASYNC_FAILURE } from '../actions/hello'

const initialState = Immutable.fromJS({
  message: 'initial message!',
  messageAsync: 'initial Async message!',
})

const helloReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload)
    case SAY_HELLO_ASYNC:
      return state.set('messageAsync', 'loading ...')
    case SAY_HELLO_ASYNC_SUCCESS:
      return state.set('messageAsync', action.payload)
    case SAY_HELLO_ASYNC_FAILURE:
      return state.set('messageAsync', 'error sending message :(')
    default:
      return state
  }
}

export default helloReducer
