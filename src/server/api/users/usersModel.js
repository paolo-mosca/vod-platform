import mongoose, { Schema } from 'mongoose'
import 'mongoose-type-email'
import bcrypt from 'bcryptjs'

const UsersSchema = new Schema({
  name: {
    type: String,
    min: 2,
  },

  email: {
    type: mongoose.SchemaTypes.Email,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    select: false,
  },

  recipes: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'recipes',
    }],
    default: [],
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },

  subscriptions: {
    type: [{
      period: {
        type: String,
        enum: ['yearly', 'monthly'],
        required: true,
      },
      isActive: {
        type: Boolean,
        required: true,
        default: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        required: true,
      },
    }],
    default: [],
  },

  stripeCustomerId: String,

  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

}, { minimize: false })

function preSave(next) {
  if (!this.password) {
    next()
    return
  }
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      next(err)
      return
    }
    this.password = hash
    next()
  })
}

UsersSchema.pre('save', preSave)

export default mongoose.model('users', UsersSchema)
