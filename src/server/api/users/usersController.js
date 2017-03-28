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

const usersController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default usersController
