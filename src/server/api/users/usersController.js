import bcrypt from 'bcryptjs'
import CustomError from 'custom-error-generator'

import auth from '../../auth'

import Users from './usersModel'

const getList = (req, res, next) => {
  Users.find()
    .then(users => res.json(users))
    .catch(next)
}

const getItem = (req, res, next) => {
  Users.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
}

const createItem = (req, res, next) => {
  Users.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Users.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Users.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const validateCredentials = (user, passwordInput) => {
  if (!user || !bcrypt.compareSync(passwordInput, user.password)) {
    throw new CustomError('custom error', { code: 400 })(
      'user with that email does not exist or password is incorrect',
    )
  }
  return user
}

// const prepareUser = (user) => {
//   const formattedUser = user.toObject()
//   delete formattedUser.password
//   formattedUser.token = auth.signToken(user._id)
//   return formattedUser
// }

const prepareUser = user => Object.assign({}, user.toObject(),
  { password: undefined }, { token: auth.signToken(user._id) },
)

const login = (req, res, next) => {
  const { email, password } = req.body
  Users.findOne({ email }).select('+password')
    .then(user => validateCredentials(user, password))
    .then(prepareUser)
    .then(user => res.json(user))
    .catch(next)
}

const lostPassword = (req, res, next) => {
  const { email } = req.body
  Users.findOne({ email })
    .then((user) => {
      if (user) {
        // process reset password here
      }
    })
    .then(() => res.json({ message: 'if a user with that email exists, we will send password reset instructions to that address' }))
    .catch(next)
}

const usersController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  login,
  lostPassword,
}

export default usersController
