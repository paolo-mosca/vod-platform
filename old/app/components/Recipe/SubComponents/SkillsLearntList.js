import React, { PropTypes } from 'react'

function SkillsLearntList ({ skillsLearnt }) {
  return (
    <section className='skills-learnt'>
      <h5>Skills learnt in this recipe</h5>
      {skillsLearnt
        .map((skill, index) => {
          var {name} = skill
          return (
            <div key={index} className = 'skill'>{name}</div>
          )
        })
      }
    </section>
  )
}
SkillsLearntList.propTypes = {
  skillsLearnt: PropTypes.array.isRequired
}

export default SkillsLearntList
