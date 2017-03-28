// @flow

import { users } from './seedData'

const peterId = '56f5c57e63cb81a7148778a2'
const jacqueId = '56f5d755340883743e85c7c8'

export default {
  adminAuthHeader: ['Authorization', `Bearer ${users.find(u => u.isAdmin).token}`],
  userAuthHeader: ['Authorization', `Bearer ${users.find(u => !u.isAdmin).token}`],
  peterAuthHeader: ['Authorization', `Bearer ${users.find(u => u._id === peterId).token}`],
  jacqueAuthHeader: ['Authorization', `Bearer ${users.find(u => u._id === jacqueId).token}`],
}
