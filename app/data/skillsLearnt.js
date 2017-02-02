
const SET_SKILLSLEARNT = 'SET_SKILLSLEARNT'

//Actions
export function setSkillsLearnt (skillsLearnt) {
  return {
    type: SET_SKILLSLEARNT,
    payload: {skillsLearnt}
  }
}

//Reducers
export default function skillsLearnt (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_SKILLSLEARNT: return payload.skillsLearnt
    default: return state
  }
}
