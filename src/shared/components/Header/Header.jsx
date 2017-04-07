// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '../../routes'
import { STATIC_PATH } from '../../config'

type Props = {
  user: {
    isAdmin: ?boolean,
  },
  onSignout: Function,
  onRegisterClick: Function,
};

const Header = ({ onSignout, onRegisterClick, user }: Props) =>
  <header className="header">
    <div className="container">
      <NavLink to={routes.RECIPE_LIST_PAGE} className="logo">
        <img src={`${STATIC_PATH}/img/KeychnSignature.png`} alt="logo" />
      </NavLink>
      <div className="nav-primary">
        <NavLink to={routes.RECIPE_LIST_PAGE} className="nav-primary-item">Recipes</NavLink>
        { !user._id &&
          <a className="nav-primary-item nav-primary-register" onClick={onRegisterClick}>Register</a> }
        { user.isAdmin &&
          <NavLink to={routes.RECIPE_CREATE_PAGE} className="nav-primary-item">Create Recipe</NavLink>}
        { user._id &&
          <div className="nav-primary-item nav-primary-user">
            <div className="nav-primary-user-menu">
              <div>My Recipes</div>
              <div>Premium</div>
              <div>Settings</div>
              <a onClick={onSignout}>Sign out</a>
            </div>
          </div> }
      </div>
    </div>
  </header>

export default Header
