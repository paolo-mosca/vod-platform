// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import CreateLogger from 'redux-logger'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import recipesReducer from '../shared/reducers/recipesReducer'
import { APP_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'
import App from '../shared/app'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-disable no-underscore-dangle */

const loggerMiddleware = new CreateLogger({
  predicate: () => !isProd,
  collapsed: true,
})

const store = createStore(
  combineReducers({ recipes: recipesReducer }),
  { recipes: preloadedState.recipes },
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))

const render = (AppComponent, reduxStore) =>
  ReactDOM.render( // eslint-disable-line react/no-render-return-value
    <Provider store={reduxStore}>
      <BrowserRouter>
        <AppContainer>
          <AppComponent />
        </AppContainer>
      </BrowserRouter>
    </Provider>,
    document.querySelector(APP_SELECTOR),
  )

render(App, store)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    const NextApp = require('../shared/app').default // eslint-disable-line global-require
    render(NextApp, store)
  })
}
