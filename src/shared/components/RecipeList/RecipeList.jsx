// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../../routes'
import RecipeItem from '../RecipeItem'

class RecipeList extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  props: {
    list: [{}],
    isLoadingList: boolean,
    loadingListError: ?string,
    fetchRecipes: Function
  };

  renderItem = (recipe: Object) => (
    <div className="container grid subsection-recipes" key={recipe._id}>
      <div className="recipe-item">
        <RecipeItem {...recipe} />
        <NavLink to={routes.recipeItemPage(recipe._id)} className="btn btn-alt recipe-detailed-info" exact>
          Read more...
        </NavLink>
      </div>
    </div>
  )

  render() {
    const { list, isLoadingList, loadingListError } = this.props
    if (isLoadingList) {
      return (
        <div>Loading...</div>
      )
    }
    if (loadingListError) {
      return (
        <div>Error loading list: {loadingListError}</div>
      )
    }
    return (
      <div>
        {list.map(this.renderItem)}
      </div>
    )
  }
}


export default RecipeList
