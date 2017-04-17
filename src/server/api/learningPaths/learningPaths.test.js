import request from 'supertest-as-promised'

import server from '../../'
import routes from '../../../shared/routes'
import { learningPaths } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/learningPaths/getList', () => app.get(routes.fetchLearningPathsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(learningPaths.length)
  }),
)

test('api/learningPaths/getItem', () => app.get(routes.fetchLearningPathEndpoint(learningPaths[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(learningPaths[0]))
  }),
)

test('api/learningPaths/updateItem (admin, success)', () => app.put(routes.updateLearningPathEndpoint(learningPaths[0]._id))
  .set(...testUtils.adminAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/learningPaths/updateItem (user, fail)', () => app.put(routes.updateLearningPathEndpoint(learningPaths[0]._id))
  .set(...testUtils.userAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)

test('api/learningPaths/deleteItem (admin, success)', () => app.put(routes.deleteLearningPathEndpoint(learningPaths[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/learningPaths/deleteItem (user, fail)', () => app.put(routes.deleteLearningPathEndpoint(learningPaths[0]._id))
  .set(...testUtils.userAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)
