// @flow

import { connect } from 'react-redux'

import { fetchRecipes } from '../actions/recipes'
import RecipeList from '../components/RecipeList'

const mapStateToProps = state => ({
  user: state.user,
  list: state.recipes.list,
  isLoadingList: state.recipes.isLoadingList,
  loadingListError: state.recipes.loadingListError,
})

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)
