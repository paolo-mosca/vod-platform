
const SET_SKILLSLEARNT = 'SET_SKILLSLEARNT'

export function setSkillsLearnt (skillsLearnt) {
  return {type: SET_SKILLSLEARNT, payload: {skillsLearnt}}
}

export default function skillsLearnt (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_SKILLSLEARNT: return payload.skillsLearnt
    default: return state
  }
}
