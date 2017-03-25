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

// call after decodeToken
const getFreshUser = (req, res, next) => {
  if (!req.user) {
    res.status(401).send('only users can perform this operation')
    return
  }
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

// call after getFreshUser
const verifyAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(401).send('only admins can perform this operation')
    return
  }
  next()
}

// call after getFreshUser
const verifyGotRecipeAccess = (req, res, next) => {
  const { user } = req
  const recipeId = req.params.id
  if (user.recipes.includes(recipeId)) {
    next()
    return
  }
  if (user.subscriptions.find(sub => sub.isActive)) {
    next()
    return
  }
  if (user.isAdmin) {
    next()
    return
  }
  res.status(401).send('this recipe requires a subscription')
}

// call after getFreshUser
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
  verifyGotRecipeAccess,
  signToken,
}

export default auth
