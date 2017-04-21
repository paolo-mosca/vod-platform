import deasync from 'deasync'

import serverConfig from '../serverConfig'
// models
import Equipments from '../api/equipments/equipmentsModel'
// import Subscriptions from '../api/subscriptions/subscriptionsModel'
import Recipes from '../api/recipes/recipesModel'

import serverLogger from './serverLogger'
// data
import { equipments, recipes } from './seedData'

const Models = [Equipments, Recipes]

// init
serverLogger.log(`Seeding ${serverConfig.env} DB ...`)

const cleanDB = () => {
  serverLogger.log('Cleaning the DB ...')
  const promises = Models.map(model => model.remove().exec())
  return Promise.all(promises)
}

const seedEquipments = () => {
  serverLogger.log('Seeding equipments ...')
  const promises = equipments.map(e => Equipments.create(e))
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

const logSeedSuccess = () => {
  serverLogger.log('Seeded DB!')
}

const logSeedError = err => serverLogger.error('error seeding DB:', err)

const seed = () => {
  let ready // eslint-disable-line no-unmodified-loop-condition
  cleanDB()
    .then(seedEquipments)
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
