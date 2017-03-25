import Tags from './tagsModel'

const getList = (req, res, next) => {
  Tags.find()
    .then(tags => res.json(tags))
    .catch(next)
}

const getItem = (req, res, next) => {
  Tags.findById(req.params.id)
    .then(tag => res.json(tag))
    .catch(next)
}

const createItem = (req, res, next) => {
  Tags.create(req.body)
    .then(tag => res.status(201).send(tag))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Tags.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Tags.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const tagsController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default tagsController
