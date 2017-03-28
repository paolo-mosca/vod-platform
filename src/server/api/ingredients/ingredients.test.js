/* eslint-disable no-console */
import request from 'supertest-as-promised'
import server from '../../'
import routes from '../../../shared/routes'
import { ingredients } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/ingredients/getList', done => app.get(routes.fetchIngredientsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(ingredients.length)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/ingredients/getItem', done => app.get(routes.fetchIngredientEndpoint(ingredients[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(ingredients[0]))
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/ingredients/updateItem (admin, success)', done => app.put(routes.updateIngredientEndpoint(ingredients[0]._id))
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

test('api/ingredients/updateItem (user, fail)', done => app.put(routes.updateIngredientEndpoint(ingredients[0]._id))
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

test('api/ingredients/deleteItem (admin, success)', done => app.put(routes.deleteIngredientEndpoint(ingredients[0]._id))
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

test('api/ingredients/deleteItem (user, fail)', done => app.put(routes.deleteIngredientEndpoint(ingredients[0]._id))
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
