import Ingredients from './ingredientsModel'

const getList = (req, res, next) => {
  Ingredients.find()
    .then(ingredients => res.json(ingredients))
    .catch(next)
}

const getItem = (req, res, next) => {
  Ingredients.findById(req.params.id)
    .then(ingredient => res.json(ingredient))
    .catch(next)
}

const createItem = (req, res, next) => {
  Ingredients.create(req.body)
    .then(ingredient => res.status(201).send(ingredient))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Ingredients.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Ingredients.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const ingredientsController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default ingredientsController
