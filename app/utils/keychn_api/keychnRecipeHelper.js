import axios from 'axios'

function getRecipeInfo (recipeId) {
  return axios.get(`https://api.keychn.com/recipes/${recipeId}`); // it returns an object containing a recipe with the detailed information
}

var helpers = {
  getRecipe () {
    return getRecipeInfo ()
    .then((info) => { info.map((recipe) => { recipe.data } ) }) // to be modified, depending on the properties of the object returned
    .catch((err) => { console.warn('Error in getRecipe: ', err) })
  }
}

export default helpers
