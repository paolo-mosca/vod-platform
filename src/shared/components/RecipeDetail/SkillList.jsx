// @flow

import React from 'react'

type Props = {
  skills: [{ name: string }]
};

const SkillsLearntList = ({ skills }: Props) =>
  <section className="skills-learnt">
    <h5>Skills learnt in this recipe</h5>
    {skills.map(({ name }) =>
      <div key={name} className="skill">{name}</div>,
    )}
  </section>

export default SkillsLearntList
