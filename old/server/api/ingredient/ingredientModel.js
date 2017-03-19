'use strict'

import mongoose from 'mongoose'
import idPlugin from '../../plugins/idPlugin'

const Schema = mongoose.Schema;

const IngredientSchema = new Schema ({
  name: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
});

IngredientSchema.plugin(idPlugin)
module.exports = mongoose.model('ingredient', IngredientSchema)
