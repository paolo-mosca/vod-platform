import { LOGIN_SUCCESS, CREATE_USER_SUCCESS, syncUserFromLs, LOGOUT } from '../shared/actions/user'
import { INIT_APP } from '../shared/actions/app'

const userMiddleware = store => next => (action) => {
  if (action.type === LOGIN_SUCCESS || action.type === CREATE_USER_SUCCESS) {
    localStorage.setItem('user', JSON.stringify(action.payload))
  }

  if (action.type === LOGOUT) {
    localStorage.removeItem('user')
  }

  if (action.type === INIT_APP) {
    const user = localStorage.getItem('user')
    if (user) {
      store.dispatch(syncUserFromLs(JSON.parse(user)))
    }
  }
  next(action)
}

export default userMiddleware
