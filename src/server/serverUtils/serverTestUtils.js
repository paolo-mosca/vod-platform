// @flow

import { users } from './seedData'

export default {
  adminAuthHeader: ['Authorization', `Bearer ${users.find(u => u.isAdmin).token}`],
  userAuthHeader: ['Authorization', `Bearer ${users.find(u => !u.isAdmin).token}`],
}
