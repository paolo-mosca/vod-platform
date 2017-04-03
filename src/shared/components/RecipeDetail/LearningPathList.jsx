// @flow

import React from 'react'

type Props = {
  paths: [{ name: string }]
};

const LearningPathList = ({ paths }: Props) =>
  <div className="'learning-path">
    <h5>Learning Path: </h5>
    <ul>
      {paths.map(({ name }) => <li key={name}>{name}</li>)}
    </ul>
  </div>

export default LearningPathList
