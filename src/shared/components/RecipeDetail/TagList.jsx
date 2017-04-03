// @flow

import React from 'react'

type Props = {
  tags: [{ name: string }]
};

const TagList = ({ tags }: Props) =>
  <div className="tags">
    <h5>Tags: </h5>
    <ul>
      { tags.map(tag => <li key={tag.name}>{tag.name}</li>) }
    </ul>
  </div>

export default TagList
