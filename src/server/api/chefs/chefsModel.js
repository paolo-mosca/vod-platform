import mongoose, { Schema } from 'mongoose'

const ChefsSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },

  thumbnailUrl: {
    type: String,
    rqeuired: true,
  },

})

export default mongoose.model('chefs', ChefsSchema)
