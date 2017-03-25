import mongoose, { Schema } from 'mongoose'
import 'mongoose-type-email'
import bcrypt from 'bcryptjs'
import uniqueValidator from 'mongoose-unique-validator'

const UsersSchema = new Schema({
  name: {
    type: String,
    required: true,
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
    required: true,
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

  subscription: {
    type: Schema.Types.ObjectId,
    ref: 'subscriptions',
  },

  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

}, { minimize: false })

function preSave(next) {
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
UsersSchema.plugin(uniqueValidator, { message: 'User with that email already exists' })

export default mongoose.model('users', UsersSchema)
