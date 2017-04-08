// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import Routes from './Routes'
import HeaderContainer from './containers/HeaderContainer'
import AuthModalContainer from './containers/AuthModalContainer'
import Footer from './components/Footer'

const App = () =>
  <div className="main-container">
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <HeaderContainer />
    <div className="container">
      <Routes />
    </div>
    <Footer />
    <AuthModalContainer />
  </div>

export default App
