import axios from 'axios'

function getRecipeOverviewInfo () {
  return axios.get('https://api.keychn.com/recipes-overview/') // it returns an object containing an array of recipes with the overview information
}

var helpers = {
  getRecipeList () {
    return getRecipeOverviewInfo()
    .then((info) => { info.map((recipe) => { recipe.data }) }) // to be modified, depending on the properties of the object returned
    .catch((err) => { console.warn('Error in getRecipeList: ', err) })
  }
}

export default helpers
