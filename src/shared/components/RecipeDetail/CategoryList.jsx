// @flow

import React from 'react'

type Props = {
  categories: [{ name: string }],
};

const CategoryList = ({ categories }: Props) =>
  <div className="recipe-categories-detailed">
    <ul>
      {categories.map(({ name }) => <li key={name}>{name}</li>)}
    </ul>
  </div>

export default CategoryList
