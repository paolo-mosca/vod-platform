// @flow

import routes from '../shared/routes'

import { recipeListPage } from './pageController'
import renderApp from './render-app'

const routing = (app: Object) => {
  app.get(routes.RECIPE_LIST_PAGE, (req, res) => {
    res.send(renderApp(req.url, recipeListPage()))
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })
}

export default routing
