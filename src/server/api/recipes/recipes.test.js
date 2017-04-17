import request from 'supertest-as-promised'

import server from '../../'
import routes from '../../../shared/routes'
import { recipes } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/recipes/getList', () => app.get(routes.fetchRecipesEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(recipes.length)
  }),
)

test('api/recipes/getItem (admin, success)', () => app.get(routes.fetchRecipeDetailsEndpoint(recipes[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(recipes[0]))
  }),
)

test('api/recipes/getItem (subscribed user, success)', () => app.get(routes.fetchRecipeDetailsEndpoint(recipes[0]._id))
  .set(...testUtils.peterAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(recipes[0]))
  }),
)

test('api/recipes/getItem (user with recipe access, success)', () => app.get(routes.fetchRecipeDetailsEndpoint(recipes[0]._id))
  .set(...testUtils.jacqueAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(recipes[0]))
  }),
)

test('api/recipes/getItem (user without recipe access, failure)', () => app.get(routes.fetchRecipeDetailsEndpoint(recipes[0]._id))
  .set(...testUtils.dufusAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)

test('api/recipes/updateItem (admin, success)', () => app.put(routes.updateRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.adminAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/recipes/updateItem (user, fail)', () => app.put(routes.updateRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.userAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)

test('api/recipes/deleteItem (admin, success)', () => app.put(routes.deleteRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/recipes/deleteItem (user, fail)', () => app.put(routes.deleteRecipeEndpoint(recipes[0]._id))
  .set(...testUtils.userAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)
