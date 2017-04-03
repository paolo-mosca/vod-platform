import mongoose, { Schema } from 'mongoose'

const RecipesSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'categories',
  }],
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'tags',
  }],
  learningPaths: [{
    type: Schema.Types.ObjectId,
    ref: 'learningPaths',
    required: true,
  }],
  courseType: {
    type: String,
    required: true,
    enum: ['starter', 'main', 'dessert', 'snack', 'drink', 'cocktail'],
  },
  pictureIngredientsUrl: {
    type: String,
    required: true,
  },
  picturePlatingUrl: {
    type: String,
    required: true,
  },
  videoThumbnailUrl: {
    type: String,
    required: true,
  },
  videoPreview: {
    type: String,
    required: true,
  },
  videoFullUrl: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    min: 0,
    default: 0,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'easy-medium', 'medium', 'medium-hard', 'hard'],
  },
  servings: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  chef: {
    type: Schema.Types.ObjectId,
    ref: 'chefs',
    required: true,
  },
  ingredients: [{
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'ingredients',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
  }],
  steps: [{
    pictureUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tip: {
      type: String,
      rquired: true,
    },
  }],
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
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'skills',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

export default mongoose.model('recipes', RecipesSchema)
