// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import { HOME_PAGE_ROUTE, HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE, NOT_FOUND_PAGE_ROUTE } from '../routes'

const Nav = () =>
  <nav>
    <ul>
      {
        [
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: HELLO_PAGE_ROUTE, label: 'Hello' },
          { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Hello Async' },
          { route: NOT_FOUND_PAGE_ROUTE, label: 'Not Found' },
        ].map(item => (
          <li key={item.route}>
            <NavLink to={item.route} activeStyle={{ color: 'limegreen' }} exact>{item.label}</NavLink>
          </li>
        ))
      }
    </ul>
  </nav>

export default Nav
