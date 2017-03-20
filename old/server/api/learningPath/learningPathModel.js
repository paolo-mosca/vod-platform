'use strict'

const mongoose = require('mongoose')
import idPlugin from '../../plugins/idPlugin'

const Schema = mongoose.Schema

const LearningPathSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});

LearningPathSchema.plugin(idPlugin)

module.exports = mongoose.model('learningPath', LearningPathSchema);
