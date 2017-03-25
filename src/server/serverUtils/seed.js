import deasync from 'deasync'
import serverLogger from './serverLogger'
import serverConfig from '../serverConfig'

// models
// import Categories from '../api/categories/categoriesModel'
import Tags from '../api/tags/tagsModel'
// import Equipments from '../api/equipments/equipmentModel'
// import Chefs from '../api/chefs/chefsModel'
// import Subscriptions from '../api/subscriptions/subscriptionsModel'
// import Ingredients from '../api/ingredients/ingredientsModel'
// import Skills from '../api/skills/skillsModel'
// import LearningPaths from '../api/learningPaths/learningPathsModel'
// import Recieps from '../api/recieps/reciepsModel'
import Users from '../api/users/usersModel'
import auth from '../auth'

// data
import { users, tags } from './seedData'

const Models = [Users, Tags]

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

const logSeedSuccess = () => {
  serverLogger.log('Seeded DB!')
}

const logSeedError = err => serverLogger.error('error seeding DB:', err)

const seed = () => {
  let ready // eslint-disable-line no-unmodified-loop-condition
  cleanDB()
    .then(seedUsers)
    .then(seedTags)
    .then(logSeedSuccess)
    .catch(logSeedError)
    .then(() => { ready = true })

  // make seed sync so test won't run before it is completed
  while (ready === undefined) { // eslint-disable-line no-unmodified-loop-condition
    deasync.sleep(100)
  }
}

export default seed
