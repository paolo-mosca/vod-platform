// @flow

import express from 'express'
import recipesRoutes from './recipes/recipesRoutes'
import usersRoutes from './users/usersRoutes'
import tagsRoutes from './tags/tagsRoutes'
import skillsRoutes from './skills/skillsRoutes'

const router = express.Router()

router.use('/recipes', recipesRoutes)
router.use('/users', usersRoutes)
router.use('/skills', skillsRoutes)
router.use('/tags', tagsRoutes)

export default router
