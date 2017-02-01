
const SET_LEARNING_PATHS = 'SET_LEARNING_PATHS'

export function setLearningPaths (learningPaths) {
  return {type: SET_LEARNING_PATHS, payload: {learningPaths}}
}

export default function learningPaths (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_LEARNING_PATHS: return payload.learningPaths
    default: return state
  }
}
