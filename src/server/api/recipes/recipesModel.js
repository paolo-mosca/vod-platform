/* eslint-disable */

const mongoose = require('mongoose')
import idPlugin from '../../plugins/idPlugin'

const Schema = mongoose.Schema
const recipeIngredientSchema = require('./recipeIngredientSchema')
const recipeStepSchema = require('./recipeStepSchema')
const recipeEquipmentSchema = require('./recipeEquipmentSchema')
var deepPopulate = require('mongoose-deep-populate')(mongoose);

const RecipeSchema = Schema ({
  title: {
    type: String,
    unique: true,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'category'
  }],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'tag'
  }],
  learningPath: [{
    type: Schema.Types.ObjectId,
    ref: 'learningPath',
    required: true
  }],
  courseType: {
    type: String,
    required: true,
    enum: ['starter' , 'main', 'dessert', 'snack', 'drink', 'cocktail']
  },
  pictureIngredients: {
    type: String,
    required: true
  },
  picturePlating: {
    type: String,
    required: true
  },
  videoThumbnail: {
    type: String,
    required: true
  },
  videoPreview: {
    type: String,
    required: true
  },
  videoFull: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    min: 0,
    default:0
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy' , 'easy-medium', 'medium', 'medium-hard', 'hard']
  },
  servings: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  chef: {
    type: Schema.Types.ObjectId,
    ref: 'chefs',
    required: true
  },
  ingredients: [recipeIngredientSchema],
  steps: [recipeStepSchema],
  equipment: [recipeEquipmentSchema],
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'skills',
  }],
})

export default mongoose.model('recipe', RecipeSchema)
