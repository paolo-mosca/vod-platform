// @flow

import express from 'express'
import recipesRoutes from './recipes/recipesRoutes'

const router = express.Router()

router.use('/recipes', recipesRoutes)

export default router
