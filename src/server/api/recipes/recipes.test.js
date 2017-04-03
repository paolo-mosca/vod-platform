/* eslint-disable no-console */
import request from 'supertest-as-promised'

import server from '../../'
import routes from '../../../shared/routes'
import { recipes } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test.only('api/recipes/getList', done => app.get(routes.fetchRecipesEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(recipes.length)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/recipes/getItem (admin, success)', done => app.get(routes.fetchRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(recipes[0]))
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/recipes/getItem (subscribed user, success)', done => app.get(routes.fetchRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.peterAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(recipes[0]))
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/recipes/getItem (user with recipe access, success)', done => app.get(routes.fetchRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.jacqueAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(recipes[0]))
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/recipes/getItem (user without recipe access, failure)', done => app.get(routes.fetchRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.dufusAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/recipes/updateItem (admin, success)', done => app.put(routes.updateRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.adminAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(204)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/recipes/updateItem (user, fail)', done => app.put(routes.updateRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.userAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(401)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/recipes/deleteItem (admin, success)', done => app.put(routes.deleteRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(204)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/recipes/deleteItem (user, fail)', done => app.put(routes.deleteRecipeEndpoint(recipes[0]._id))
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
