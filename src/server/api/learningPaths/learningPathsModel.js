import mongoose, { Schema } from 'mongoose'

const LearningPathsSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

})

export default mongoose.model('learningPaths', LearningPathsSchema)
