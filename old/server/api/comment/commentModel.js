import mongoose from 'mongoose'
import idPlugin from '../../plugins/idPlugin'

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  recipeId: {
    type: Schema.Types.ObjectId,
    ref: 'recipe',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  created: {
    type: Date,
    required: true
  },
});

CommentSchema.plugin(idPlugin)

module.exports = mongoose.model('comment', CommentSchema);
