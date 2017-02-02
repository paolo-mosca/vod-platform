import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import RecipeList from '../components/RecipeList/RecipeList'
import Recipe from '../components/Recipe/Recipe'
import Terms from '../components/LegalComponents/Terms'
import PrivacyPolicy from '../components/LegalComponents/PrivacyPolicy'
import preload from '../../public/dataRecipe.json'
import RecipeForm from '../components/RecipeForm'
import RegisterForm from '../components/Auth/RegisterForm'
import SignInForm from '../components/Auth/SignInForm'
import SampleVideo from '../components/Video/Sample'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={(props) => <RecipeList recipes={preload.recipes} {...props} />}/>
      <Route path='register' component={RegisterForm} />
      <Route path='signin' component={SignInForm} />

      {/* <IndexRoute component={RecipeListContainer}/> // once the API is properly connected */}
      <Route path='recipe-details/:id'>
        <IndexRoute component={(props) => {
          const recipe = preload.recipes.filter((recipe) => props.params.id === recipe.id)
          return <Recipe recipe={recipe[0]} {...props} />
        }}
        />
      </Route>
      {/* <Route path='/recipe-details/:id' component={RecipeContainer}></Route> //once the API is properly connected  */}
      <Route path='/recipe/create' component={RecipeForm} />
      <Route path='/recipes/:slug/edit' component={RecipeForm} />
      <Route path='terms' component={Terms} />
      <Route path='privacy-policy' component={PrivacyPolicy} />
      <Route path='sample-video' component={SampleVideo} />
    </Route>
  </Router>
)

module.exports = routes
