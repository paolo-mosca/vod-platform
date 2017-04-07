// @flow

import React from 'react'

import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import LostPasswordForm from './LostPasswordForm'

type Props = {
  modalStatus: string,
  onModalOverlayClick: Function,
  onGoToLoginClick: Function,
  onGoToSignupClick: Function,
  onGoToForgotPasswordClick: Function,
  onLogin: Function,
  onSignup: Function,
  onLostPassword: Function,
};

const AuthModal = ({
  modalStatus, onGoToLoginClick, onGoToSignupClick, onModalOverlayClick,
  onLostPassword, onLogin, onSignup, onGoToForgotPasswordClick,
}: Props) => {
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
  return (
    <div className="modal-wrap" onClick={onModalOverlayClick}>
      <div className="modal" onClick={evt => evt.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

export default AuthModal
