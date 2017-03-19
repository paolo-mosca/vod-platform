// @flow

import express from 'express'
import compression from 'compression'

import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'
import routing from './routing'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${WEB_PORT} ${isProd ? 'production' : 'development'}
    \nKeep "yarn dev:wds" running in another terminal`)
})
