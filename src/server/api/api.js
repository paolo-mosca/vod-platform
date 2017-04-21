// @flow

import express from 'express'

import recipesRoutes from './recipes/recipesRoutes'
import equipmentsRoutes from './equipments/equipmentsRoutes'

const router = express.Router()

router.use('/recipes', recipesRoutes)
router.use('/equipments', equipmentsRoutes)

export default router
