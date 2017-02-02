import React, { PropTypes } from 'react'

function CategoryList ({categories}) {
  return (
    <div className ='recipe-categories-detailed'>
      <ul>
        {categories
          .map((category) => <li key={category}>{category}</li>)
        }
      </ul>
    </div>
  )
}
CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoryList
