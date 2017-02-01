import React from 'react'
import RecipeListFromAPI from '../components/RecipeDisplay/OverviewDisplay/RecipeListFromAPI'
import keychnRecipeOverviewHelper from '../utils/keychn_api/keychnRecipeOverviewHelper'

var RecipeListContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      isLoading: true,
      recipeList: []
    }
  },
  componentDidMount () {
    keychnRecipeOverviewHelper.getRecipeList()
      .then((recipes) => { // Assumption: the object return is an ARRAY
        this.setState({
          isLoading: false,
          recipeList: recipes
        })
      })
  },
  render () {
    return (
      <RecipeListFromAPI
        isLoading={this.state.isLoading}
        recipeList={this.state.recipeList} />
    )
  }
})

export default RecipeListContainer
