// @flow

import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipeDetails } from '../actions/recipes'
import RecipeDetail from '../components/RecipeDetail'

type Props = {
  id: string,
  isLoadingDetail: boolean,
  loadingDetailError: ?string,
  fetchRecipeDetails: Function,
  recipe: ?Object,
};

class RecipeDetailContainer extends React.Component {
  componentWillMount() {
    this.props.fetchRecipeDetails(this.props.id)
  }

  props: Props

  render() {
    const { isLoadingDetail, loadingDetailError, recipe } = this.props
    if (isLoadingDetail) {
      return <h3>Loading ...</h3>
    }

    if (loadingDetailError) {
      return <h3>Error: {loadingDetailError}</h3>
    }

    if (recipe) {
      return <RecipeDetail {...recipe} />
    }
    return null
  }
}

const mapStateToProps = (state, props) => ({
  id: props.id,
  recipe: state.recipes.detail[props.id],
  isLoadingDetail: state.recipes.isLoadingDetail,
  loadingDetailError: state.recipes.loadingDetailError,
})

const mapDispatchToProps = dispatch => ({
  fetchRecipeDetails: id => dispatch(fetchRecipeDetails(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailContainer)
