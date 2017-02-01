import React from 'react'
import RecipeFromAPI from '../components/RecipeDisplay/DetailedDisplay/RecipeFromAPI'
import keychnRecipeHelper from '../utils/keychn_api/keychnRecipeHelper'

var RecipeContainer = React.createClass({
  propTypes: {
    keychnRecipeHelper: React.PropTypes.func.isRequired,
    recipe: React.PropTypes.object.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      isLoading: true,
      recipe: {}
    }
  },
  componentDidMount () {
    const clickedRecipe = this.props // WHAT ??? should get the id from the recipe clicked.
    .keychnRecipeHelper.getRecipe()
      .then((clickedRecipe) => { // Assumption: the object return is an object
        this.setState({
          isLoading: false,
          recipe
        })
      })
  },
  render () {
    return (
      <RecipeFromAPI
        isLoading={this.state.isLoading}
        recipe={this.state.recipe} />
    )
  }
})

export default RecipeContainer
