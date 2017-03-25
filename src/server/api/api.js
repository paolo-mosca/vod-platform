// @flow

import express from 'express'
import recipesRoutes from './recipes/recipesRoutes'
import usersRoutes from './users/usersRoutes'
import tagsRoutes from './tags/tagsRoutes'

const router = express.Router()

router.use('/recipes', recipesRoutes)
router.use('/users', usersRoutes)
router.use('/tags', tagsRoutes)

export default router
