// @flow

import React from 'react'

import { STATIC_PATH } from '../config'

type Props = {
  title: string,
  description: string,
  videoThumbnailUrl: string,
  chef: {
    name: string, // eslint-disable-line react/no-unused-prop-types
    thumbnailUrl: string, // eslint-disable-line react/no-unused-prop-types
  }
};

const RecipeItem = ({ title, description, videoThumbnailUrl, chef }: Props) =>
  <div className="recipe-component">
    <div className="recipe-video-preview-holder">
      <img className="recipe-image" src={`${STATIC_PATH}/img/${videoThumbnailUrl}`} alt="Video Thumbnail" />
    </div>
    <div className="card-recipe">
      <h3>{title}</h3>
    </div>
    <div className="recipe-author">
      <img className="recipe-author-avatar round-img" src={`${STATIC_PATH}/img/recipes/${chef.thumbnailUrl}`} alt="Chef Thumbnail" />
      <span className="recipe-author-name">{chef.name}</span>
    </div>
    <div className="card-content">
      <div className="recipe-description">
        <h5>{description}</h5>
      </div>
    </div>
  </div>

export default RecipeItem
