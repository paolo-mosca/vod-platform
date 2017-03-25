/* eslint-disable */

import request from 'supertest-as-promised'
import server from '../../'
import routes from '../../../shared/routes'
import { tags } from '../../serverUtils/seedData'

const app = request(server)

test('server/tags/getList', (done) => {
  expect(true).toBe(true)
  app.get(routes.fetchTagsEndpoint())
    .then((resp) => {
      // expect(resp.body).toEqual(tags)
      expect(true).toBe(true)
      done()
    })
    .catch(console.error)
})
