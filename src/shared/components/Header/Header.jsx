// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../../routes'
import { STATIC_PATH } from '../../config'

const Header = () =>
  <header className={styles.header}>
    <NavLink to={routes.RECIPE_LIST_PAGE} className={styles.logo}>
      <img src={`${STATIC_PATH}/img/KeychnSignature.png`} alt="logo" />
    </NavLink>
    <div className={styles.rightMenu}>
      <NavLink to={routes.RECIPE_LIST_PAGE}>Recipes</NavLink>
      <div className={styles.user} />
    </div>
  </header>

export default Header
