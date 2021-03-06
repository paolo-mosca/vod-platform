import deasync from 'deasync'

import serverConfig from '../serverConfig'
// models
import Categories from '../api/categories/categoriesModel'
import Tags from '../api/tags/tagsModel'
import Equipments from '../api/equipments/equipmentsModel'
import Chefs from '../api/chefs/chefsModel'
// import Subscriptions from '../api/subscriptions/subscriptionsModel'
import Ingredients from '../api/ingredients/ingredientsModel'
import Skills from '../api/skills/skillsModel'
import LearningPaths from '../api/learningPaths/learningPathsModel'
import Recipes from '../api/recipes/recipesModel'
import Users from '../api/users/usersModel'
import auth from '../auth'

import serverLogger from './serverLogger'
// data
import { users, tags, skills, ingredients, categories, equipments,
  chefs, learningPaths, recipes } from './seedData'

const Models = [Users, Tags, Skills, Ingredients, Categories,
  Equipments, Chefs, LearningPaths, Recipes]

// init
serverLogger.log(`Seeding ${serverConfig.env} DB ...`)

const cleanDB = () => {
  serverLogger.log('Cleaning the DB ...')
  const promises = Models.map(model => model.remove().exec())
  return Promise.all(promises)
}

const attachTokenToUsers = () => {
  users.map((u) => {
    u.token = auth.signToken(u._id)
    return u
  })
}

const seedUsers = () => {
  serverLogger.log('Seeding users ...')
  const promises = users.map(u => Users.create(u))
  return Promise.all(promises)
          .then(attachTokenToUsers)
}

const seedTags = () => {
  serverLogger.log('Seeding tags ...')
  const promises = tags.map(t => Tags.create(t))
  return Promise.all(promises)
}

const seedLearningPaths = () => {
  serverLogger.log('Seeding learningPaths ...')
  const promises = learningPaths.map(l => LearningPaths.create(l))
  return Promise.all(promises)
}

const seedEquipments = () => {
  serverLogger.log('Seeding equipments ...')
  const promises = equipments.map(e => Equipments.create(e))
  return Promise.all(promises)
}

const seedChefs = () => {
  serverLogger.log('Seeding chefs ...')
  const promises = chefs.map(c => Chefs.create(c))
  return Promise.all(promises)
}

const seedCategories = () => {
  serverLogger.log('Seeding categories ...')
  const promises = categories.map(c => Categories.create(c))
  return Promise.all(promises)
}

const seedSkills = () => {
  serverLogger.log('Seeding skills ...')
  const promises = skills.map(s => Skills.create(s))
  return Promise.all(promises)
}

const seedRecipes = () => { // eslint-disable-line
  // @TODO [AdGo] 20/04/2017 - fix me
  if (serverConfig.env === 'testing') {
    return Promise.resolve([])
  }
  serverLogger.log('Seeding recipes ...')
  const promises = recipes.map(r => Recipes.create(r))
  return Promise.all(promises)
}

const seedIngredients = () => {
  serverLogger.log('Seeding ingredients ...')
  const promises = ingredients.map(i => Ingredients.create(i))
  return Promise.all(promises)
}

const logSeedSuccess = () => {
  serverLogger.log('Seeded DB!')
}

const logSeedError = err => serverLogger.error('error seeding DB:', err)

const seed = () => {
  let ready // eslint-disable-line no-unmodified-loop-condition
  cleanDB()
    .then(seedSkills)
    .then(seedTags)
    .then(seedCategories)
    .then(seedIngredients)
    .then(seedUsers)
    .then(seedEquipments)
    .then(seedLearningPaths)
    .then(seedChefs)
    .then(seedRecipes)
    .then(logSeedSuccess)
    .catch(logSeedError)
    .then(() => { ready = true })

  // make seed sync so test won't run before it is completed
  while (ready === undefined) { // eslint-disable-line no-unmodified-loop-condition
    deasync.sleep(100)
  }
}

export default seed
