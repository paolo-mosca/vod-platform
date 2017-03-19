'use strict'

import mongoose from 'mongoose'
import idPlugin from '../../plugins/idPlugin'

const Schema = mongoose.Schema;

const RecipeIngredientSchema = new Schema({

  ingredient: {
    type: Schema.Types.ObjectId,
    ref: 'ingredient',
    required: true
  },
  quantity: {
    type: Number,
    min: 0,
    required: true
  },
  unit: {
    type: String,
    required: true
  }
});

RecipeIngredientSchema.plugin(idPlugin)

module.exports = RecipeIngredientSchema;
