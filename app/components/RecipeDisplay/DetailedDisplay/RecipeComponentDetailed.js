import React, { PropTypes } from 'react'

import Moment from 'react-moment'
  // const Moment=require('react-moment').default
import { StyleSheet, css } from 'aphrodite'
import CustomImage from '../OverviewDisplay/CustomImage'

function RecipeComponentDetailed(props) {
  return (
    <div className='card-recipe-detailed col-md-12'>
      <div className='recipe-video-preview-holder-detailed'>
        <CustomImage {...props}/>
      </div>
      <div className='card-recipe-inner-detailed'>
        <h3 className='recipe-title-detailed'> {
            props.title
          }
        </h3>
      </div>
      <div className='recipe-author-detailed'>
        <img className={
            `img-responsive recipe-author-thumbnail ${css(styles.author)}`
          }
          src={
            `/public/img/recipes/${props.author.thumbnail}`
          }
        />
        <h4 className='recipe-author-name-detailed'> {
            props.author.name
          }
        </h4>
      </div>
      <div className={
          `card-content ${css(styles.cardcontent)}`
        }>
        <div className={
            `creation-date ${css(styles.date)}`
          }>
          Date:
            <Moment unix format='MM/YYYY'>{props.created}</Moment>
          </div>
        <div className="recipe categories-detailed">
          Categories: {
            props.categories.join(' | ')
          }
        </div>
        <div className="recipe-description-detailed"> {
            props.description
          }
        </div>
      </div>
    </div>
  )
}

RecipeComponentDetailed.propTypes={
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

export default RecipeComponentDetailed


const styles=StyleSheet.create({
  author: {
    width: 30,
    height: 30,
    borderRadius: 50,
    float: 'left',
    'margin-right': 10,
  },
  cardcontent: {
    float: 'left',
  },
  date: {
    float: 'right',
  }
})