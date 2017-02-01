
const SET_EQUIPMENT = 'SET_EQUIPMENT'

export function setEquipment (equipment) {
  return {type: SET_EQUIPMENT, payload: {equipment}}
}

export default function equipment (state = [], action) {
  const {type, payload} = action
  switch (type) {
    case SET_EQUIPMENT: return payload.equipment
    default: return state
  }
}
