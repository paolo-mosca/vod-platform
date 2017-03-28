import mongoose, { Schema } from 'mongoose'

const TagsSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

})

export default mongoose.model('tags', TagsSchema)
