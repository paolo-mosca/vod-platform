'use strict'

import mongoose from 'mongoose'
import idPlugin from '../../plugins/idPlugin'

const Schema = mongoose.Schema;

const equipmentSchema = new Schema ({
  name: {
    type: String,
    unique: true,
    required: true
  },
});

equipmentSchema.plugin(idPlugin)

module.exports = mongoose.model('equipment', equipmentSchema);
