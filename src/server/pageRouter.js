// @flow

import routes from '../shared/routes'

import { recipeListPage, privacyPage, aboutPage, termsPage, recipeItemPage } from './pageController'
import renderApp from './render-app'

const routing = (app: Object) => {
  app.get(routes.RECIPE_LIST_PAGE, (req, res) => {
    res.send(renderApp(req.url, recipeListPage()))
  })

  app.get(routes.PRIVACY_PAGE, (req, res) => {
    res.send(renderApp(req.url, privacyPage()))
  })

  app.get(routes.ABOUT_PAGE, (req, res) => {
    res.send(renderApp(req.url, aboutPage()))
  })

  app.get(routes.TERMS_PAGE, (req, res) => {
    res.send(renderApp(req.url, termsPage()))
  })

  app.get(routes.recipeItemPage(), (req, res) => {
    res.send(renderApp(req.url, recipeItemPage()))
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })
}

export default routing
