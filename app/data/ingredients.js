
const SET_INGREDIENTS = 'set_ingredients'

export function setIngredients (ingredients) {
  return {type: SET_INGREDIENTS, payload: {ingredients}}
}

export default function ingredients (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_INGREDIENTS: return payload.ingredients
    default: return state
  }
}
