// Component to test if the call to the Keychn API to get the list of recipes works properly, this should be somehow implemented directly to the RecipeList.js file
import React from 'react'
import Loading from '../../TransitionAnimations/Loading'

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function RecipeListFromAPI (props) {
  return props.isLoading === true
    ? <Loading />
    : <div>Recipe LIST From KEYCHN API: {puke(props)}</div>
}

export default RecipeListFromAPI
