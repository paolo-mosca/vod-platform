// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import routes from './routes'
import RecipeListPage from './pages/RecipeListPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'

const Routes = () =>
  <Switch>
    <Route exact path={routes.recipeDetailPage()} component={RecipeDetailPage} />
    <Route exact path={routes.ABOUT_PAGE} component={AboutPage} />
    <Route exact path={routes.PRIVACY_PAGE} component={PrivacyPage} />
    <Route exact path={routes.TERMS_PAGE} component={TermsPage} />
    {/* recipes must come last, FIXME */}
    <Route exact path={routes.RECIPLE_LIST_PAGE} component={RecipeListPage} />
    <Route component={() => <NotFoundPage />} />
  </Switch>

export default Routes
