// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import routes from './routes'
import RecipeListPage from './containers/pages/RecipeListPage'
import NotFoundPage from './containers/pages/NotFoundPage'

const App = () =>
  <div className="main-container">
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <div className="container">
      <Switch>
        <Route exact path={routes.RECIPLE_LIST_PAGE} render={() => <RecipeListPage />} />
        <Route component={() => <NotFoundPage />} />
      </Switch>
    </div>
  </div>

export default App
