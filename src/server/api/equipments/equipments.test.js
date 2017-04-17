import request from 'supertest-as-promised'

import server from '../../'
import routes from '../../../shared/routes'
import { equipments } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/equipments/getList', () => app.get(routes.fetchEquipmentsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(equipments.length)
  }),
)

test('api/equipments/getItem', () => app.get(routes.fetchEquipmentEndpoint(equipments[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(equipments[0]))
  }),
)

test('api/equipments/updateItem (admin, success)', () => app.put(routes.updateEquipmentEndpoint(equipments[0]._id))
  .set(...testUtils.adminAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/equipments/updateItem (user, fail)', () => app.put(routes.updateEquipmentEndpoint(equipments[0]._id))
  .set(...testUtils.userAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)

test('api/equipments/deleteItem (admin, success)', () => app.put(routes.deleteEquipmentEndpoint(equipments[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/equipments/deleteItem (user, fail)', () => app.put(routes.deleteEquipmentEndpoint(equipments[0]._id))
  .set(...testUtils.userAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)
