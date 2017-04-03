// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../../routes'
import { STATIC_PATH } from '../../config'

type Props = {
  user: {
    isAdmin: ?boolean,
  },
};

const Header = ({ user }: Props) =>
  <header className="header">
    <div className="container">
      <NavLink to={routes.RECIPE_LIST_PAGE} className="logo">
        <img src={`${STATIC_PATH}/img/KeychnSignature.png`} alt="logo" />
      </NavLink>
      <div className="nav-primary">
        <NavLink to={routes.RECIPE_LIST_PAGE}>Recipes</NavLink>
        { !user &&
          <button>Register</button> }
        { user &&
          <div className="nav-primary-user">
            User image / name
          </div> }
        { user && user.isAdmin &&
          <NavLink to={routes.RECIPE_CREATE_PAGE}>Create Recipe</NavLink>}
      </div>
    </div>
  </header>

export default Header
