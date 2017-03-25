import Equipments from './equipmentsModel'

const getList = (req, res, next) => {
  Equipments.find()
    .then(equipments => res.json(equipments))
    .catch(next)
}

const getItem = (req, res, next) => {
  Equipments.findById(req.params.id)
    .then(equipment => res.json(equipment))
    .catch(next)
}

const createItem = (req, res, next) => {
  Equipments.create(req.body)
    .then(equipment => res.status(201).send(equipment))
    .catch(next)
}

const updateItem = (req, res, next) => {
  Equipments.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch(next)
}

const deleteItem = (req, res, next) => {
  Equipments.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).send())
    .catch(next)
}

const equipmentsController = {
  getList,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}

export default equipmentsController
