import mongoose, { Schema } from 'mongoose'

const SkillsSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

})

export default mongoose.model('skills', SkillsSchema)
