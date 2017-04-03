// @flow

import React from 'react'

import RecipeDetailContainer from '../containers/RecipeDetailContainer'

type Props = {
  match: {
    params: {
      id: string,
    },
  },
};

const RecipeDetailPage = ({ match }: Props) =>
  <div>
    <RecipeDetailContainer id={match.params.id} />
  </div>

export default RecipeDetailPage
