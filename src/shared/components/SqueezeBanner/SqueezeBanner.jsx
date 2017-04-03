// @flow

import React from 'react'

type Props = {
  email: ?string,
  emailInput: string,
  updateEmailInput: Function,
  onSubmit: Function
};

const SqueezeBanner = ({ email, emailInput, updateEmailInput, onSubmit }: Props) => {
  if (email) return null
  return (
    <div className="squeeze-banner">
      <h1>Learn with chefs</h1>
      <p>Attend to our live MasterClasses or watch the recorded video</p>
      <form onSubmit={(evt) => { evt.preventDefault(); onSubmit(emailInput) }} className="form-email">
        <input
          type="email"
          onChange={evt => updateEmailInput(evt.target.value)}
          value={emailInput}
          placeholder="I want to cook! Take my email!"
          className="email-value"
          required
        />
        <button className="btn">Get started for FREE</button>
      </form>
    </div>
  )
}

export default SqueezeBanner
