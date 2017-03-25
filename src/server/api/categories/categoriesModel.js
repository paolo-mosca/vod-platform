import mongoose, { Schema } from 'mongoose'

const CategoriesSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

})

export default mongoose.model('categories', CategoriesSchema)
