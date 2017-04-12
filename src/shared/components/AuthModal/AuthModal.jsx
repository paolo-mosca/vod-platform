// @flow

import React from 'react'

import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import PromptSignup from './PromptSignup'
import LostPasswordForm from './LostPasswordForm'
import PaymentForm from './PaymentForm'

type Props = {
  modalStatus: string,
  onModalOverlayClick: Function,
  onGoToLoginClick: Function,
  onGoToSignupClick: Function,
  onGoToForgotPasswordClick: Function,
  onLogin: Function,
  onSignup: Function,
  onCloseModal: Function,
  onLostPassword: Function,
  onGoToYearlyPaymentClick: Function,
  onGoToLifetimePaymentClick: Function,
  onTogglePaymentModeClick: Function,
};

const AuthModal = ({
  modalStatus, onGoToLoginClick, onGoToSignupClick, onModalOverlayClick, onLostPassword, onLogin,
  onSignup, onGoToForgotPasswordClick, onGoToYearlyPaymentClick, onGoToLifetimePaymentClick,
  onTogglePaymentModeClick, onCloseModal }: Props) => {
  if (modalStatus === 'closed') return null
  let component
  if (modalStatus === 'login') {
    component = (
      <LoginForm
        onSubmit={onLogin}
        onGoToForgotPasswordClick={onGoToForgotPasswordClick}
        onGoToSignupClick={onGoToSignupClick}
      />
    )
  }
  if (modalStatus === 'signup') {
    component = (
      <SignupForm
        onSubmit={onSignup}
        onGoToForgotPasswordClick={onGoToForgotPasswordClick}
        onGoToLoginClick={onGoToLoginClick}
      />
    )
  }
  if (modalStatus === 'lostPassword') {
    component = (
      <LostPasswordForm
        onSubmit={onLostPassword}
        onGoToLoginClick={onGoToLoginClick}
        onGoToSignupClick={onGoToSignupClick}
      />
    )
  }
  if (modalStatus === 'promptSignup') {
    component = (
      <PromptSignup
        onGoToYearlyPaymentClick={onGoToYearlyPaymentClick}
        onGoToLifetimePaymentClick={onGoToLifetimePaymentClick}
        onCloseModal={onCloseModal}
      />
    )
  }
  if (modalStatus.match(/Payment/)) {
    component = (
      <PaymentForm
        mode={modalStatus.substr(0, modalStatus.indexOf('Payment'))}
        onTogglePaymentModeClick={onTogglePaymentModeClick}
        onCloseModal={onCloseModal}
      />
    )
  }
  return (
    <div className="modal-wrap" onClick={onModalOverlayClick}>
      <div className="modal" onClick={evt => evt.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

export default AuthModal
