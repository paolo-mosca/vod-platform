import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './serverConfig'
import User from './api/users/usersModel'

const checkToken = expressJwt({ secret: config.jwtSecret })

const signToken = _id => jwt.sign({ _id }, config.jwtSecret)

const decodeToken = (req, res, next) => {
  if (req.query && req.query.hasOwnProperty('access_token')) { // eslint-disable-line no-prototype-builtins
    req.headers.authorization = `Bearer ${req.query.access_token}`
  }
  const authorization = req.headers.authorization || req.headers.Authorization
  if (!authorization || !authorization.match('Bearer ')) {
    next()
    return
  }
  checkToken(req, res, next)
}

const getFreshUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        res.status(401).send('token didn\'t match any user')
        return
      }
      req.user = user
      next()
    })
    .catch(next)
}

const verifyAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(401).send('only admins can perform this operation')
    return
  }
  next()
}

const verifyOwner = (req, res, next) => {
  if (req.user._id !== req.params.id) {
    res.status(401).send('only the owner can perform this operation')
    return
  }
  next()
}

const auth = {
  decodeToken,
  getFreshUser,
  verifyAdmin,
  verifyOwner,
  signToken,
}

export default auth
