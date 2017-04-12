// @flow

import React from 'react'
import { reduxForm, Field } from 'redux-form'

import RenderField from '../RenderField'
import { validateRequired, validateEmail } from '../../validations'

type Props = {
  onGoToSignupClick: Function,
  onGoToLoginClick: Function,
  handleSubmit: Function,
  onSubmit: Function,
  error: ?any,
};

const LostPasswordForm = ({ error, onGoToSignupClick, onGoToLoginClick, handleSubmit }: Props) =>
  <div className="modal-inner">
    <div className="modal-or">Or</div>
    <form onSubmit={handleSubmit} className="modal-form">
      <Field
        name="email"
        placeholder="Email"
        className="input"
        component={RenderField}
        validate={[validateRequired, validateEmail]}
        type="email"
      />
      <button className="button">Send my password</button>
      { error && <span className="form-error">{error}</span> }
    </form>
    <div className="modal-toggle">
      <button onClick={onGoToSignupClick} className="modal-toggle-link">Create Account</button>
      <button onClick={onGoToLoginClick} className="modal-toggle-link">Login</button>
    </div>
  </div>

export default reduxForm({
  form: 'auth',
})(LostPasswordForm)
