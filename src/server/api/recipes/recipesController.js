import Recipes from './recipesModel'

const getList = (req, res, next) => {
  Recipes.find()
    .populate('chef categories')
    .then(recipes => res.json(recipes))
    .catch(next)
}

// [AdGo] 03/04/2017 - @TODO - find a more "mongoosy" way.
// SO question: http://stackoverflow.com/questions/43193173/populate-mongoose-key-as-part-of-object
const equipmentsIngredientsWorkaround = recipe => Object.assign({}, recipe.toObject(), {
  equipments: recipe.toObject().equipments.map(equip => ({
    quantity: equip.quantity,
    name: equip._id.name,
    _id: equip._id._id,
  })),
  ingredients: recipe.toObject().ingredients.map(ingred => ({
    quantity: ingred.quantity,
    unit: ingred.unit,
    name: ingred._id.name,
    _id: ingred._id._id,
  })),
})

const getItem = (req, res, next) => {
  Recipes.findById(req.params.id)
    .populate('chef categories tags learningPaths ingredients._id equipments._id skills')
    .then(equipmentsIngredientsWorkaround)
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
