// @flow

import express from 'express'

import auth from '../../auth'

import controller from './chefsController'

const router = express.Router()

router.route('/')
  .get(controller.getList)
  .post(auth.decodeToken, auth.getFreshUser, auth.verifyAdmin, controller.createItem)

router.route('/:id')
  .get(auth.decodeToken, auth.getFreshUser, auth.verifyAdmin, controller.getItem)
  .put(auth.decodeToken, auth.getFreshUser, auth.verifyAdmin, controller.updateItem)
  .delete(auth.decodeToken, auth.getFreshUser, auth.verifyAdmin, controller.deleteItem)

export default router
