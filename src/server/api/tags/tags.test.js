/* eslint-disable no-console */
import request from 'supertest-as-promised'
import server from '../../'
import routes from '../../../shared/routes'
import { tags } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/tags/getList', done => app.get(routes.fetchTagsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(tags.length)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/tags/getItem', done => app.get(routes.fetchTagEndpoint(tags[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(tags[0]))
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/tags/updateItem (admin, success)', done => app.put(routes.updateTagEndpoint(tags[0]._id))
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

test('api/tags/updateItem (user, fail)', done => app.put(routes.updateTagEndpoint(tags[0]._id))
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

test('api/tags/deleteItem (admin, success)', done => app.put(routes.deleteTagEndpoint(tags[0]._id))
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

test('api/tags/deleteItem (user, fail)', done => app.put(routes.deleteTagEndpoint(tags[0]._id))
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
