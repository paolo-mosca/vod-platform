// @flow

import express from 'express'
import recipesRoutes from './recipes/recipesRoutes'
import tagsRoutes from './tags/tagsRoutes'

const router = express.Router()

router.use('/recipes', recipesRoutes)
router.use('/tags', tagsRoutes)

export default router
