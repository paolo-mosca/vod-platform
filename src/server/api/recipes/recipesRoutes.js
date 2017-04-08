// @flow

import express from 'express'

import auth from '../../auth'

import controller from './recipesController'

const router = express.Router()

router.route('/')
  .get(controller.getList)

router.route('/:id')
  .get(auth.decodeToken, auth.getFreshUser, controller.getItem)
  .put(auth.decodeToken, auth.getFreshUser, auth.verifyAdmin, controller.updateItem)
  .delete(auth.decodeToken, auth.getFreshUser, auth.verifyAdmin, controller.deleteItem)

export default router
