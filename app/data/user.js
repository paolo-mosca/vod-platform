import {post} from './utils/network'
import {browserHistory} from 'react-router'
import {get} from './utils/network'

const UPDATE_USER = 'UPDATE_USER'

export function register(data) {
  return function(dispatch) {
    return post('/api/users/register', data)
  }
}

export function signIn(data) {
  console.log(data)
  return function(dispatch) {
    return post('/api/users/login', data)
  }
}

export function logout() {
  return function(dispatch) {
    return get('/api/users/logout')
      .then((res) => {
        if (res.status === 200) {
          browserHistory.push('/')
        }
      })
  }
}

export default function user(state = {}, action) {
  const {type, payload} = action
  switch(type) {
    case UPDATE_USER: return ({...state, ...payload})
    default: return state
  }
}
