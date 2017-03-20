import serverLogger from '../serverUtils/serverLogger'

// eslint-disable-next-line no-unused-vars
const errMiddleware = (err, req, res, next) => {
  serverLogger.error(err.stack)
  res.status(err.code).send(err.message)
}

export default errMiddleware
