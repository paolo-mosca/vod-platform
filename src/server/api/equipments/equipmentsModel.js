import mongoose, { Schema } from 'mongoose'

const EquipmentsSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

})

export default mongoose.model('equipments', EquipmentsSchema)
