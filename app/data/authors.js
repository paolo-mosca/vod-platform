
const SET_AUTHORS = 'SET_AUTHORS'

export function setAuthors (authors) {
  return {type: SET_AUTHORS, payload: {authors}}
}

export default function authors (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_AUTHORS: return payload.authors
    default: return state
  }
}
