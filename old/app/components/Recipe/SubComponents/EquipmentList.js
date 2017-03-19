import React, { PropTypes } from 'react'

function EquipmentList ({equipment}) {
  return (
    <section className ='equipment'>
      <h5>Equipment</h5>
      <div className='utensil-wrapper'>
        {equipment
          .map((utensil, index) => {
            var {name} = utensil
            return (
              <div key={index} className='utensil-name'>{name}</div>
            )
          })
        }
      </div>
    </section>
  )
}
EquipmentList.propTypes = {
  equipment: PropTypes.array.isRequired
}

export default EquipmentList
