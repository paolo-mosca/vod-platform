import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import configureStore from './redux/modules/store'
import {Provider} from 'react-redux'
import 'react-select/dist/react-select.css'

ReactDOM.render((
  <Provider store={configureStore({})}>
    {routes}
  </Provider>
), document.getElementById('app'))
