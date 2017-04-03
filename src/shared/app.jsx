// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import routes from './routes'
import RecipeListPage from './pages/RecipeListPage'
import RecipeItemPage from './pages/RecipeItemPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'
import HeaderContainer from './containers/HeaderContainer'
import Footer from './components/Footer'

const App = () =>
  <div className="main-container">
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <HeaderContainer />
    <div className="container">
      <Switch>
        <Route exact path={routes.recipeItemPage()} render={() => <RecipeItemPage />} />
        <Route exact path={routes.ABOUT_PAGE} render={() => <AboutPage />} />
        <Route exact path={routes.PRIVACY_PAGE} render={() => <PrivacyPage />} />
        <Route exact path={routes.TERMS_PAGE} render={() => <TermsPage />} />
        {/* recipes must come last, FIXME */}
        <Route exact path={routes.RECIPLE_LIST_PAGE} render={() => <RecipeListPage />} />
        <Route component={() => <NotFoundPage />} />
      </Switch>
    </div>
    <Footer />
  </div>

export default App
