import mongoose, { Schema } from 'mongoose'

const IngredientsSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

})

export default mongoose.model('ingredients', IngredientsSchema)
