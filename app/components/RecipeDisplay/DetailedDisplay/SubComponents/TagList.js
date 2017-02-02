import React, { PropTypes } from 'react'

function TagList ({ tags }) {
  return (
    <div className='tags'>
      <h5>Tags: </h5>
      <ul>
        {tags
          .map((tag) => <li key={tag}>{tag}</li>)
        }
      </ul>
    </div>
  )
}
TagList.propTypes = {
  tags: PropTypes.array.isRequired
}

export default TagList
