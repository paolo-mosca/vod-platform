import mongoose, { Schema } from 'mongoose'

const RecipesSchema = new Schema({
  equipments: [{
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'equipments',
    },
    quantity: {
      type: Number,
      required: true,
    },
  }],
})

export default mongoose.model('recipes', RecipesSchema)
