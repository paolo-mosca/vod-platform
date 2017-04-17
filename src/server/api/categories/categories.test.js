import request from 'supertest-as-promised'

import server from '../../'
import routes from '../../../shared/routes'
import { categories } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/categories/getList', () => app.get(routes.fetchCategoriesEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(categories.length)
  }),
)

test('api/categories/getItem', () => app.get(routes.fetchCategoryEndpoint(categories[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(categories[0]))
  }),
)

test('api/categories/updateItem (admin, success)', () => app.put(routes.updateCategoryEndpoint(categories[0]._id))
  .set(...testUtils.adminAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/categories/updateItem (user, fail)', () => app.put(routes.updateCategoryEndpoint(categories[0]._id))
  .set(...testUtils.userAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)

test('api/categories/deleteItem (admin, success)', () => app.put(routes.deleteCategoryEndpoint(categories[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/categories/deleteItem (user, fail)', () => app.put(routes.deleteCategoryEndpoint(categories[0]._id))
  .set(...testUtils.userAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)
