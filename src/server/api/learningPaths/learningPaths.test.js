/* eslint-disable no-console */
import request from 'supertest-as-promised'
import server from '../../'
import routes from '../../../shared/routes'
import { learningPaths } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/learningPaths/getList', done => app.get(routes.fetchLearningPathsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(learningPaths.length)
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/learningPaths/getItem', done => app.get(routes.fetchLearningPathEndpoint(learningPaths[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(learningPaths[0]))
    done()
  })
  .catch((err) => {
    console.error(err)
    done()
  }),
)

test('api/learningPaths/updateItem (admin, success)', done => app.put(routes.updateLearningPathEndpoint(learningPaths[0]._id))
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

test('api/learningPaths/updateItem (user, fail)', done => app.put(routes.updateLearningPathEndpoint(learningPaths[0]._id))
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

test('api/learningPaths/deleteItem (admin, success)', done => app.put(routes.deleteLearningPathEndpoint(learningPaths[0]._id))
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

test('api/learningPaths/deleteItem (user, fail)', done => app.put(routes.deleteLearningPathEndpoint(learningPaths[0]._id))
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
