// @flow

import { connect } from 'react-redux'

import { fetchRecipeDetails } from '../actions/recipes'
import RecipeDetail from '../components/RecipeDetail'

const mapStateToProps = (state, props) => ({
  id: props.id,
  recipe: state.recipes.detail[props.id],
  isLoadingDetail: state.recipes.isLoadingDetail,
  loadingDetailError: state.recipes.loadingDetailError,
})

const mapDispatchToProps = dispatch => ({
  fetchRecipeDetails: id => dispatch(fetchRecipeDetails(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail)
