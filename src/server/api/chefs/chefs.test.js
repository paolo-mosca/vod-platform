import request from 'supertest-as-promised'

import server from '../../'
import routes from '../../../shared/routes'
import { chefs } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/chefs/getList', () => app.get(routes.fetchChefsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(chefs.length)
  }),
)

test('api/chefs/getItem', () => app.get(routes.fetchChefEndpoint(chefs[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(chefs[0]))
  }),
)

test('api/chefs/updateItem (admin, success)', () => app.put(routes.updateChefEndpoint(chefs[0]._id))
  .set(...testUtils.adminAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/chefs/updateItem (user, fail)', () => app.put(routes.updateChefEndpoint(chefs[0]._id))
  .set(...testUtils.userAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)

test('api/chefs/deleteItem (admin, success)', () => app.put(routes.deleteChefEndpoint(chefs[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/chefs/deleteItem (user, fail)', () => app.put(routes.deleteChefEndpoint(chefs[0]._id))
  .set(...testUtils.userAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)
