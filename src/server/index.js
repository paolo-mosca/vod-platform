// @flow

import express from 'express'
import mongoose from 'mongoose'
import favicon from 'serve-favicon'

import { STATIC_PATH } from '../shared/config'

import seed from './serverUtils/seed'
import serverConfig from './serverConfig'
import serverLogger from './serverUtils/serverLogger'
import pageRouter from './pageRouter'
import api from './api'
import middlewares from './middlewares'

mongoose.Promise = global.Promise
const app = express()
app.use(favicon('public/favicon.ico'))
mongoose.connect(serverConfig.dbUrl)

if (serverConfig.shouldSeed) {
  seed()
}

middlewares.app(app)
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))
app.use('/api', api)
pageRouter(app)
app.use(middlewares.error)
app.use(middlewares.notFound)

// avoid crash on test watch mode
if (!module.parent) {
  app.listen(serverConfig.port, () => {
    serverLogger.log(`Server listening on ${serverConfig.port} ${serverConfig.env}`)
    serverLogger.log('Keep "yarn dev:wds" running in another terminal')
  })
}

export default app // for testing
