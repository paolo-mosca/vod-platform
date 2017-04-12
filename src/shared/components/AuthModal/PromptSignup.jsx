// @flow

import React from 'react'

import { YEARLY_PAYMENT, LIFETIME_PAYMENT } from '../../constants'

type Props = {
  onCloseModal: Function,
  onGoToYearlyPaymentClick: Function,
  onGoToLifetimePaymentClick: Function,
};

const PromptSignup = ({
  onCloseModal, onGoToYearlyPaymentClick, onGoToLifetimePaymentClick,
}: Props) =>
  <div className="modal-inner">
    <h3 className="prompt-signup-title">You want to learn from the experts?<br />Be Keychn Prime</h3>
    <a onClick={onGoToYearlyPaymentClick} className="prompt-signup-yearly">
      <div>Yearly</div>
      <div className="prompt-signup-yearly-price">{YEARLY_PAYMENT} €</div>
    </a>
    <div className="prompt-signup-or">or</div>
    <a className="prompt-signup-lifetime" onClick={onGoToLifetimePaymentClick}>
      <div>Lifetime</div>
      <div>{LIFETIME_PAYMENT} €</div>
    </a>
    <a onClick={onCloseModal}>Not now thanks ...</a>
  </div>

export default PromptSignup
