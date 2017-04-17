import request from 'supertest-as-promised'

import server from '../../'
import routes from '../../../shared/routes'
import { ingredients } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/ingredients/getList', () => app.get(routes.fetchIngredientsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(ingredients.length)
  }),
)

test('api/ingredients/getItem', () => app.get(routes.fetchIngredientEndpoint(ingredients[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(ingredients[0]))
  }),
)

test('api/ingredients/updateItem (admin, success)', () => app.put(routes.updateIngredientEndpoint(ingredients[0]._id))
  .set(...testUtils.adminAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/ingredients/updateItem (user, fail)', () => app.put(routes.updateIngredientEndpoint(ingredients[0]._id))
  .set(...testUtils.userAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)

test('api/ingredients/deleteItem (admin, success)', () => app.put(routes.deleteIngredientEndpoint(ingredients[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/ingredients/deleteItem (user, fail)', () => app.put(routes.deleteIngredientEndpoint(ingredients[0]._id))
  .set(...testUtils.userAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)
