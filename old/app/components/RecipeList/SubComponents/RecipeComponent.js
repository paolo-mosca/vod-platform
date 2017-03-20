import React, { PropTypes } from 'react'

// import Moment from 'react-moment'

function RecipeComponent (props) {
  return (
    <div className='recipe-component'>
      <div className='recipe-video-preview-holder'>
        <img className='recipe-image' src={`/public/img/${props.videoThumbnail}`}/>
      </div>
      <div className='card-recipe'>
        <h3>{props.title}</h3>
      </div>
      <div className='recipe-author'>
        <img className='recipe-author-avatar round-img' src={`/public/img/recipes/${props.author.thumbnail}`} />
        <span className='recipe-author-name'>{props.author.name}</span>
      </div>
      <div className='card-content'>
        {/* <h5>Date:</h5>
        <Moment unix format='MM/YYYY'>{props.created}</Moment> */}
        <div className='recipe-categories'>
          {/* <h5>Categories: </h5> */}
          <ul>
            {props.categories
              .map((category) => <li key={category}>{category}</li>)
            }
          </ul>
        </div>
        <div className='recipe-description'>
          <h5>{props.description}</h5>
        </div>
      </div>
    </div>
  )
}

RecipeComponent.propTypes = {
  videoThumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  }),
  categories: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
}

export default RecipeComponent
