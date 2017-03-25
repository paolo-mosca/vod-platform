// @flow

import express from 'express'
import recipesRoutes from './recipes/recipesRoutes'
import categoriesRoutes from './categories/categoriesRoutes'
import usersRoutes from './users/usersRoutes'
import tagsRoutes from './tags/tagsRoutes'
import skillsRoutes from './skills/skillsRoutes'
import ingredientsRoutes from './ingredients/ingredientsRoutes'

const router = express.Router()

router.use('/recipes', recipesRoutes)
router.use('/categories', categoriesRoutes)
router.use('/users', usersRoutes)
router.use('/skills', skillsRoutes)
router.use('/ingredients', ingredientsRoutes)
router.use('/tags', tagsRoutes)

export default router
