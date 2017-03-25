import LearningPaths from './learningPathsModel'

const getList = (req, res, next) => {
  LearningPaths.find()
    .then(learningPaths => res.json(learningPaths))
    .catch(next)
}

const getItem = (req, res, next) => {
  LearningPaths.findById(req.params.id)
    .then(learningPath => res.json(learningPath))
    .catch(next)
}

const createItem = (req, res, next) => {
  LearningPaths.create(req.body)
    .then(learningPath => res.status(201).send(learningPath))
    .catch(next)
}

const updateItem = (req, res, next) => {
  LearningPaths.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  LearningPaths.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const learningPathsController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default learningPathsController
