/* eslint-disable no-console */
import request from 'supertest-as-promised'
import server from '../../'
import routes from '../../../shared/routes'
import { equipments } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/equipments/getList', done => app.get(routes.fetchEquipmentsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(equipments.length)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/equipments/getItem', done => app.get(routes.fetchEquipmentEndpoint(equipments[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(equipments[0]))
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/equipments/updateItem (admin, success)', done => app.put(routes.updateEquipmentEndpoint(equipments[0]._id))
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

test('api/equipments/updateItem (user, fail)', done => app.put(routes.updateEquipmentEndpoint(equipments[0]._id))
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

test('api/equipments/deleteItem (admin, success)', done => app.put(routes.deleteEquipmentEndpoint(equipments[0]._id))
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

test('api/equipments/deleteItem (user, fail)', done => app.put(routes.deleteEquipmentEndpoint(equipments[0]._id))
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
