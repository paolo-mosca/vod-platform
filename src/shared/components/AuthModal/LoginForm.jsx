// @flow

import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { validateRequired, validateEmail } from '../../validations'
import RenderField from '../RenderField'

type Props = {
  onGoToSignupClick: Function,
  onGoToForgotPasswordClick: Function,
  handleSubmit: Function,
  submitting: boolean,
  error: ?any,
};

const LoginForm = ({ error, onGoToSignupClick, onGoToForgotPasswordClick,
  handleSubmit, submitting }: Props) =>
    <div className="modal-inner">
      <div className="modal-or">Or</div>
      <form onSubmit={handleSubmit} className="modal-form">
        <Field
          name="email"
          placeholder="Email"
          component={RenderField}
          className="input"
          validate={[validateRequired, validateEmail]}
          type="email"
        />
        <Field
          name="password"
          placeholder="Password"
          component={RenderField}
          className="input"
          validate={[validateRequired]}
          type="password"
        />
        <button className="button" disabled={submitting}>Login</button>
        { error && <span className="form-error">{error}</span> }
      </form>
      <div className="modal-toggle">
        <button onClick={onGoToSignupClick} className="modal-toggle-link">Create Account</button>
        <button onClick={onGoToForgotPasswordClick} className="modal-toggle-link">Forgot my Password</button>
      </div>
    </div>

export default reduxForm({
  form: 'auth',
})(LoginForm)
