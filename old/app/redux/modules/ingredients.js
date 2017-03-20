
const SET_INGREDIENTS = 'set_ingredients'

//Actions
export function setIngredients (ingredients) {
  return {
    type: SET_INGREDIENTS,
    payload: {ingredients}
  }
}

//Reducers
export default function ingredients (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_INGREDIENTS: return payload.ingredients
    default: return state
  }
}
