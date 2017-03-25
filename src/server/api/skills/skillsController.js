import Skills from './skillsModel'

const getList = (req, res, next) => {
  Skills.find()
    .then(skills => res.json(skills))
    .catch(next)
}

const getItem = (req, res, next) => {
  Skills.findById(req.params.id)
    .then(skill => res.json(skill))
    .catch(next)
}

const createItem = (req, res, next) => {
  Skills.create(req.body)
    .then(skill => res.status(201).send(skill))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Skills.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Skills.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const skillsController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default skillsController
