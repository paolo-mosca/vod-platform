import {setIngredients} from './ingredients'
import {setTags} from './tags'
import {setLearningPaths} from './learningPaths'
import {setCategories} from './categories'
import {setAuthors} from './authors'
import {setEquipment} from './equipment'
import {setSkillsLearnt} from './skillsLearnt'
import { SubmissionError } from 'redux-form'
import _ from 'lodash'
import {get} from '../utils/network'

// constants
const SET_RECIPES = 'SET_RECIPES'
const ADD_RECIPE = 'ADD_RECIPE'

// Actions
export function setRecipes (recipes) {
  return {
    type: SET_RECIPES,
    payload: {recipes}
  }
}

export function addRecipe (recipe) {
  return {
    type: ADD_RECIPE,
    payload: {recipe}
  }
}

export function fetchRecipes () {
  return function (dispatch) {
    return get('/api/recipes')
      .then((res) => res.json())
      .then((recipes) => {
        dispatch(setRecipes(recipes))
      })
  }
}

export function fetchRecipeInfo () {
  return function (dispatch) {
    return get('/api/recipe-info')
      .then((res) => res.json())
      .then((data) => {
        const {categories, tags, learningPaths, ingredients, authors, equipment, skillsLearnt} = data
        categories && dispatch(setCategories(categories))
        tags && dispatch(setTags(tags))
        learningPaths && dispatch(setLearningPaths(learningPaths))
        ingredients && dispatch(setIngredients(ingredients))
        authors && dispatch(setAuthors(authors))
        equipment && dispatch(setEquipment(equipment))
        skillsLearnt && dispatch(setSkillsLearnt(skillsLearnt))
      })
  }
}

export function fetchRecipe (slug) {
  return function (dispatch) {
    return get(`/api/recipes/${slug}`)
      .then((res) => res.json())
      .then((recipe) => {
        dispatch(addRecipe(recipe))
      })
  }
}

export function createOrUpdateRecipe (data, slug) {
  return function (dispatch) {
    let url = `/api/recipes`
    if (slug) {
      url = `${url}/${slug}`
    }
    return fetch(url, {
      method: slug ? 'PUT' : 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.status !== 200) {
        throw new SubmissionError({})
      }
    })
  }
}

// selectors
export function recipeBySlug (state, slug) {
  return state.recipes.find((recipe) => recipe.slug === slug)
}

// helper functions
function filterDuplicateRecipes (recipes) {
  return _.uniq(recipes, 'id')
}

// Reducers
export default function recipes (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_RECIPES: return filterDuplicateRecipes(payload.recipes)
    case ADD_RECIPE: return filterDuplicateRecipes(state.concat(payload.recipe))
    default: return state
  }
}
