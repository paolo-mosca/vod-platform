import request from 'supertest-as-promised'

import server from '../../'
import routes from '../../../shared/routes'
import { skills } from '../../serverUtils/seedData'
import testUtils from '../../serverUtils/serverTestUtils'

const app = request(server)

test('api/skills/getList', () => app.get(routes.fetchSkillsEndpoint())
  .then((resp) => {
    expect(resp.body).toEqual(expect.any(Array))
    expect(resp.body).toHaveLength(skills.length)
  }),
)

test('api/skills/getItem', () => app.get(routes.fetchSkillEndpoint(skills[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.body).toEqual(expect.objectContaining(skills[0]))
  }),
)

test('api/skills/updateItem (admin, success)', () => app.put(routes.updateSkillEndpoint(skills[0]._id))
  .set(...testUtils.adminAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/skills/updateItem (user, fail)', () => app.put(routes.updateSkillEndpoint(skills[0]._id))
  .set(...testUtils.userAuthHeader)
  .send({ name: 'mahalo' })
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)

test('api/skills/deleteItem (admin, success)', () => app.put(routes.deleteSkillEndpoint(skills[0]._id))
  .set(...testUtils.adminAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(204)
  }),
)

test('api/skills/deleteItem (user, fail)', () => app.put(routes.deleteSkillEndpoint(skills[0]._id))
  .set(...testUtils.userAuthHeader)
  .then((resp) => {
    expect(resp.status).toBe(401)
  }),
)
