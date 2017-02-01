
const SET_CATEGORIES = 'SET_CATEGORIES'

export function setCategories (categories) {
  return {type: SET_CATEGORIES, payload: {categories}}
}

export default function categories (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_CATEGORIES: return payload.categories
    default: return state
  }
}
