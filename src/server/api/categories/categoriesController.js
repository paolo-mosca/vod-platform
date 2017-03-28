import Categories from './categoriesModel'

const getList = (req, res, next) => {
  Categories.find()
    .then(categories => res.json(categories))
    .catch(next)
}

const getItem = (req, res, next) => {
  Categories.findById(req.params.id)
    .then(category => res.json(category))
    .catch(next)
}

const createItem = (req, res, next) => {
  Categories.create(req.body)
    .then(category => res.status(201).send(category))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Categories.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Categories.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const categoriesController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default categoriesController
