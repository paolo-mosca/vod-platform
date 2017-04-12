// @flow

import React from 'react'

import { STATIC_PATH } from '../../config'

import CategoryList from './CategoryList'

type Props = {
  videoFullUrl: string,
  title: string,
  description: string,
  chef: {
    name: string,
    thumbnailUrl: string,
  },
  categories: [{ name: string }],
};

const Details = (props: Props) =>
  <section className="card-recipe-detailed">
    <div className="recipe-video-preview-holder-detailed">
      <img
        className="recipe-video-preview-detailed"
        src={`${STATIC_PATH}/img/${props.videoFullUrl}`}
        alt="Title"
      />
    </div>
    <div className="card-recipe-inner-detailed">
      <h3> {props.title}</h3>
    </div>
    <div className="recipe-author-detailed">
      <img
        className="recipe-author-avatar-detailed round-img"
        src={`${STATIC_PATH}/img/recipes/${props.chef.thumbnailUrl}`}
        alt={props.chef.name}
      />
      <span className="recipe-author-name-detailed">{props.chef.name}</span>
    </div>
    <div className="card-content-detailed">
      <CategoryList categories={props.categories} />
      <div className="recipe-description-detailed">
        <h5>{props.description}</h5>
      </div>
    </div>
  </section>

export default Details
