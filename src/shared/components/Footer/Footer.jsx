// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'

import { STATIC_PATH } from '../../config'
import routes from '../../routes'

const Footer = () =>
  <footer className="primary-footer">
    <div className="container nav-wrapper">
      <div className="primary-footer-left">
        <small>&copy; Keychn Experience</small>
        <div className="social-icons">
          <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/keychn/">
            <img className="logo-social-media" src={`${STATIC_PATH}/icons/facebook.svg`} alt="facebook icon" />
          </a>
          <a rel="noreferrer noopener" target="_blank" href="https://www.twitter.com/keychn/">
            <img className="logo-social-media" src={`${STATIC_PATH}/icons/twitter.svg`} alt="twitter icon" />
          </a>
          <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/keychn/">
            <img className="logo-social-media" src={`${STATIC_PATH}/icons/instagram.svg`} alt="instagram icon" />
          </a>
        </div>
      </div>
      <nav className="secondary-nav">
        <NavLink to={routes.ABOUT_PAGE}>About us</NavLink>
        <NavLink to={routes.TERMS_PAGE}>Terms</NavLink>
        <NavLink to={routes.PRIVACY_PAGE}>Privacy</NavLink>
      </nav>
    </div>
  </footer>

export default Footer
