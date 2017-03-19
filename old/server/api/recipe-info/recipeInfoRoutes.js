const recipeInfoRouter = require('express').Router();
const tagModel = require('../tag/tagModel');
const learningPathModel = require('../learningPath/learningPathModel');
const categoryModel = require('../category/categoryModel');
const ingredientModel = require('../ingredient/ingredientModel')
const chefModel = require('../chef/chefModel')
const equipmentModel = require('../equipment/equipmentModel')
const skillLearntModel = require('../skillLearnt/skillLearntModel')
import passport from 'passport'
import {checkUser} from '../../middleware/authMiddleware'

recipeInfoRouter.get('/recipe-info', function (req, res) {
  console.log('recipe-info', req.session.id, 'user', req.user)
  Promise.all([
    categoryModel.find({}),
    tagModel.find({}),
    learningPathModel.find({}),
    ingredientModel.find({}),
    chefModel.find({}),
    equipmentModel.find({}),
    skillLearntModel.find({})
  ]).then(function (data) {
    const [categories, tags, learningPaths, ingredients, authors, equipment, skillsLearnt] = data
    res.json({
      categories,
      tags,
      learningPaths,
      ingredients,
      authors,
      equipment,
      skillsLearnt
    })
  })
})

module.exports = recipeInfoRouter
