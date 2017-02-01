
const SET_TAGS = 'SET_TAGS'

export function setTags (tags) {
  return {type: SET_TAGS, payload: {tags}}
}

export default function tags (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_TAGS: return payload.tags
    default: return state
  }
}
