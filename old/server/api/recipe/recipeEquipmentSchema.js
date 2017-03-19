'use strict'

import mongoose from 'mongoose'
import idPlugin from '../../plugins/idPlugin'

const Schema = mongoose.Schema;

const recipeEquipmentSchema = new Schema({
  equipment: {
    type: Schema.Types.ObjectId,
    ref: 'equipment',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

recipeEquipmentSchema.plugin(idPlugin)

module.exports = recipeEquipmentSchema;
