import Chefs from './chefsModel'

const getList = (req, res, next) => {
  Chefs.find()
    .then(chefs => res.json(chefs))
    .catch(next)
}

const getItem = (req, res, next) => {
  Chefs.findById(req.params.id)
    .then(chef => res.json(chef))
    .catch(next)
}

const createItem = (req, res, next) => {
  Chefs.create(req.body)
    .then(chef => res.status(201).send(chef))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Chefs.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Chefs.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const chefsController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default chefsController
