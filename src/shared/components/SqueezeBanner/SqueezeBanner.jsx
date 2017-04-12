// @flow

import React from 'react'
import { reduxForm, Field } from 'redux-form'

import { validateRequired, validateEmail } from '../../validations'
import RenderField from '../RenderField'

type Props = {
  email: ?string,
  onSubmit: Function,
  handleSubmit: Function,
};

const SqueezeBanner = ({ email, handleSubmit }: Props) => {
  if (email) return null
  return (
    <div className="squeeze-banner">
      <h1>Learn with chefs</h1>
      <p>Attend to our live MasterClasses or watch the recorded video</p>
      <form onSubmit={handleSubmit} className="form-email">
        <Field
          type="email"
          name="email"
          placeholder="I want to cook! Take my email!"
          className="squeeze-banner-input"
          component={RenderField}
          validate={[validateRequired, validateEmail]}
        />
        <button className="squeeze-banner-button">Get started for FREE</button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'squeeze',
})(SqueezeBanner)
