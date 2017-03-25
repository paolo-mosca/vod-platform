// @flow

import express from 'express'

import controller from './categoriesController'
import auth from '../../auth'

const router = express.Router()

router.route('/')
  .get(controller.getList)
  .post(auth.decodeToken, auth.verifyAdmin, controller.createItem)

router.route('/:id')
  .put(auth.decodeToken, auth.verifyAdmin, controller.updateItem)
  .delete(auth.decodeToken, auth.verifyAdmin, controller.deleteItem)

export default router
