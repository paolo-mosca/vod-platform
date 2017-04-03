import Recipes from './recipesModel'

const getList = (req, res, next) => {
  Recipes.find()
    .populate('chef categories')
    .then(recipes => res.json(recipes))
    .catch(next)
}

const getItem = (req, res, next) => {
  Recipes.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(next)
}

const createItem = (req, res, next) => {
  Recipes.create(req.body)
    .then(recipe => res.status(201).send(recipe))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Recipes.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Recipes.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const recipesController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default recipesController
