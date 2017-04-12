// @flow

import React from 'react'
import { reduxForm, Field } from 'redux-form'
import capitalize from 'lodash.capitalize'

import { YEARLY_PAYMENT, LIFETIME_PAYMENT } from '../../constants'
import RenderField from '../RenderField'
import { validateRequired } from '../../validations'

type Props = {
  mode: 'yearly' | 'lifetime',
  onTogglePaymentModeClick: Function,
  submitting: boolean,
  error: ?any,
  handleSubmit: Function,
};

const PaymentForm = ({ mode, onTogglePaymentModeClick, submitting, error, handleSubmit }: Props) =>
  <div className="modal-inner">
    <div className="input-container">
      <h3 className="payment-form-title">Get {capitalize(mode)} Access</h3>
      <form onSubmit={handleSubmit} className="modal-form">
        <Field
          name="cc-holder-name"
          placeholder="Cardholder name"
          component={RenderField}
          className="input"
          validate={[validateRequired]}
          type="text"
        />
        <Field
          name="cc"
          placeholder="Credit Card Number"
          component={RenderField}
          className="input"
          validate={[validateRequired]}
          type="text"
        />
        <Field
          name="cc-holder-dob"
          placeholder="MM/YY"
          component={RenderField}
          className="input"
          validate={[validateRequired]}
          type="text"
        />
        <Field
          name="cvv"
          placeholder="CVV"
          component={RenderField}
          className="input"
          validate={[validateRequired]}
          type="text"
        />
        <button className="button" disabled={submitting}>Pay {mode === 'yearly' ? YEARLY_PAYMENT : LIFETIME_PAYMENT} €</button>
        { error && <span className="form-error">{error}</span> }
      </form>
      <div className="text-center">
        <button onClick={onTogglePaymentModeClick} className="modal-toggle-link">Switch to { mode === 'yearly' ? 'lifetime' : 'yearly'} payment</button>
      </div>
    </div>
  </div>

export default reduxForm({
  form: 'payment',
})(PaymentForm)
