import Tags from './tagsModel'

/* eslint-disable */
const getList = (req, res, next) => {
  Tags.find()
    .then(res.json)
    .catch(next)
}

const createItem = (req, res, next) => {
  Tags.create(req.body)
    .then(building => res.status(201).send(building))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Tags.update({ _id: req.params.id }, { $set: req.body })
    .then(res.json)
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Tags.findByIdAndRemove(req.params.id)
    .then(res.json)
    .catch(next)
}

const tagsController = {
  getList,
  createItem,
  updateItem,
  deleteItem,
}

export default tagsController
