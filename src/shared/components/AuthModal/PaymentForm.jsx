// @flow

import React from 'react'
import capitalize from 'lodash.capitalize'

import { YEARLY_PAYMENT, LIFETIME_PAYMENT } from '../../constants'

type Props = {
  mode: 'yearly' | 'lifetime',
  onTogglePaymentModeClick: Function,
  // submitting: boolean,
  error: ?any,
  onSubscribe: Function,
};


class PaymentForm extends React.Component {

  state = {
    error: null,
  }

  componentDidMount() {
    this.stripe = window.Stripe('pk_test_U8vqf0SvU5nMd5thuggjVLLQ')
    const elements = this.stripe.elements()
    // Custom styling can be passed to options when creating an Element.
    const style = {
      base: {
        // Add your base input styles here. For example:
        fontSize: '16px',
        lineHeight: '24px',
      },
    }

    // Create an instance of the card Element
    this.card = elements.create('card', { style })

    // Add an instance of the card Element into the `card-element` <div>
    this.card.mount('#card-element')
    this.card.addEventListener('change', ({ error }) => {
      if (error) this.setState({ error: error.message })
    })
  }

  onSubmit = (evt: Object) => {
    evt.preventDefault()
    this.stripe.createToken(this.card)
      .then(({ token, error }) => {
        if (error) {
          this.setState({ error: error.message })
          return
        }
        this.props.onSubscribe({ token, mode: this.props.mode })
      })
      .catch(error => this.setState({ error }))
  }

  stripe: Object
  card: Object

  props: Props

  render() {
    const { mode, onTogglePaymentModeClick, submitting, error } = this.props
    return (
      <div className="modal-inner">
        <div className="input-container">
          <h3 className="payment-form-title">Get {capitalize(mode)} Access</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-row">
              <label htmlFor="card-element">Credit or debit card</label>
              <div id="card-element" />
              <div id="card-errors">{this.state.error}</div>
            </div>
            <button>Submit Payment</button>
          </form>
          <div className="text-center">
            <button onClick={onTogglePaymentModeClick} className="modal-toggle-link">Switch to { mode === 'yearly' ? 'lifetime' : 'yearly'} payment</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PaymentForm
