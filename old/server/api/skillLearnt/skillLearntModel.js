'use strict'

import mongoose from 'mongoose'
import idPlugin from '../../plugins/idPlugin'
const Schema = mongoose.Schema;

const skillLearntSchema = new Schema ({
  name: {
    type: String,
    unique: true,
    required: true
  },
});

skillLearntSchema.plugin(idPlugin)

module.exports = mongoose.model('skillLearnt', skillLearntSchema);
