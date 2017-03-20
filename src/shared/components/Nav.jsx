// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../routes'

const Nav = () =>
  <nav>
    <ul>
      {
        [
          { route: routes.RECIPE_LIST_PAGE, label: 'Home' },
        ].map(item => (
          <li key={item.route}>
            <NavLink to={item.route} activeStyle={{ color: 'limegreen' }} exact>{item.label}</NavLink>
          </li>
        ))
      }
    </ul>
  </nav>

export default Nav
