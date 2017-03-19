import React, { PropTypes } from 'react'

function LearningPathList ({ learningPath }) {
  return (
    <div className='learning-path'>
      <h5>Learning Path: </h5>
      <ul>
        {learningPath
          .map((learningPath) => <li key={learningPath}>{learningPath}</li>)
        }
      </ul>
    </div>
  )
}
LearningPathList.propTypes = {
  learningPath: PropTypes.array.isRequired
}

export default LearningPathList
