// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import routes from './routes'
import RecipeListPage from './pages/RecipeListPage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'

const App = () =>
  <div className="main-container">
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Header />
    <div className="container">
      <Switch>
        <Route exact path={routes.RECIPLE_LIST_PAGE} render={() => <RecipeListPage />} />
        <Route component={() => <NotFoundPage />} />
      </Switch>
    </div>
  </div>

export default App
