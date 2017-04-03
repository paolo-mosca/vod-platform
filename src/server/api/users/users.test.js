/* eslint-disable no-console */
import request from 'supertest-as-promised'

import routes from '../../../shared/routes'
import server from '../../'
import { users } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/users/getItem (owner, success)', (done) => {
  app.get(routes.fetchUserEndpoint(users[0]._id))
    .set('Authorization', `Bearer ${users[0].token}`)
    .then((resp) => {
      expect(resp.body.name).toBe(users[0].name)
      expect(resp.body.email).toBe(users[0].email)
      expect(resp.body.recipes).toEqual(expect.any(Array))
      done()
    })
    .catch((err) => {
      console.error(err)
      done()
    })
})

test('api/users/getItem (not owner, fail)', (done) => {
  app.get(routes.fetchUserEndpoint(users[1]._id))
    .set('Authorization', `Bearer ${users[0].token}`)
    .then((resp) => {
      expect(resp.status).toBe(401)
      done()
    })
    .catch((err) => {
      console.error(err)
      done()
    })
})

test('api/users/getList (admin, success)', done => app.get(routes.fetchUsersEndpoint())
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(users.length)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/users/getList (user, fail)', done => app.get(routes.fetchUsersEndpoint())
  .set(...testUtils.userAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/users/createItem (admin, success)', (done) => {
  const newUser = {
    name: 'El Mafiosso',
    password: 'badassmadafaka',
    email: 'mafioso@gmail.com',
  }
  return app.post(routes.createUserEndpoint())
    .set(...testUtils.adminAuthHeader)
    .send(newUser)
    .then((resp) => {
      expect(resp.status).toBe(201)
      expect(resp.body.name).toEqual(newUser.name)
      expect(resp.body.email).toEqual(newUser.email)
      expect(resp.body.createdAt).toEqual(expect.any(String))
      expect(resp.body.recipes).toEqual([])
      done()
    })
    .catch((err) => {
      console.error(err)
      done()
    })
})

test('api/users/createItem (user, fail)', (done) => {
  const newUser = {
    name: 'El Mafiosso',
    password: 'badassmadafaka',
    email: 'mafioso@gmail.com',
  }
  return app.post(routes.createUserEndpoint())
    .set(...testUtils.userAuthHeader)
    .send(newUser)
    .then((resp) => {
      expect(resp.status).toBe(401)
      done()
    })
    .catch((err) => {
      console.error(err)
      done()
    })
})
