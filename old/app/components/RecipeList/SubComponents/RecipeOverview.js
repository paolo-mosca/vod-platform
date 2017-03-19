import React from 'react'
import { Link } from 'react-router'
import RecipeComponent from './RecipeComponent'

function RecipeOverview (props) {
  return (
    <div className='recipe-item'>
      <RecipeComponent {...props}/>
      <Link to={`/recipe-details/${props.id}`} className='btn btn-alt recipe-detailed-info' >
        Read more...
      </Link>
    </div>
  )
}

RecipeOverview.propTypes = {
  id: React.PropTypes.string.isRequired
}

export default RecipeOverview
