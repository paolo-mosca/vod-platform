// @flow

import express from 'express'

import controller from './recipesController'

const router = express.Router()

router.route('/')
  .get(controller.getList)

router.route('/:id')
  .get(controller.getItem)

export default router
