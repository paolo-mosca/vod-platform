'use strict'

import mongoose from 'mongoose'
import idPlugin from '../../plugins/idPlugin'

const Schema = mongoose.Schema;

const RecipeStepSchema = new Schema({

  picture: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tip: {
    type: String
  }
});

RecipeStepSchema.plugin(idPlugin)

module.exports =  RecipeStepSchema;
