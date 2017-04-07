// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import routes from '../../routes'
import { validateRequired, validateEmail } from '../../validations'
import RenderField from '../RenderField'

type Props = {
  onGoToLoginClick: Function,
  onGoToForgotPasswordClick: Function,
  onSubmit: Function,
  handleSubmit: Function,
  error: ?any,
};

const SignupForm = ({ error, onGoToLoginClick, onGoToForgotPasswordClick, handleSubmit }: Props) =>
  <div className="modal-inner">
    <div className="modal-or">Or</div>
    <form onSubmit={handleSubmit} className="modal-form">
      <Field
        name="name"
        placeholder="Name"
        className="input"
        component={RenderField}
        validate={[validateRequired]}
        type="text"
      />
      <Field
        name="email"
        placeholder="Email"
        className="input"
        component={RenderField}
        validate={[validateRequired, validateEmail]}
        type="email"
      />
      <Field
        name="password"
        placeholder="Password"
        className="input"
        component={RenderField}
        validate={[validateRequired]}
        type="password"
      />
      <button className="button">Signup</button>
      { error && <span className="form-error">{error}</span> }
    </form>
    <div className="modal-toggle">
      <button onClick={onGoToLoginClick} className="modal-toggle-link">Login</button>
      <button onClick={onGoToForgotPasswordClick} className="modal-toggle-link">Forgot my Password</button>
    </div>
    <footer className="modal-footer">
      <div className="modal-optout">
        <input type="checkbox" id="login-form-newsletter-opt-out" />
        <label htmlFor="login-form-newsletter-opt-out">Opt out of email updates</label>
      </div>
      <p>By creating an account, I agree to Keychn&apos;s
        <NavLink to={routes.TERMS_PAGE}>terms</NavLink> of use and confirm that I have read the
        <NavLink to={routes.PRIVACY_PAGE}>Privacy Policy</NavLink>.
      </p>
    </footer>
  </div>

export default reduxForm({
  form: 'auth',
})(SignupForm)
