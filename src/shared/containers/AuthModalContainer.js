// @flow

import { connect } from 'react-redux'

import { goToLogin, goToSignup, goToLostPassword, closeModal,
  login, createUser, lostPassword } from '../actions/user'
import AuthModal from '../components/AuthModal'

const mapStateToProps = state => state.user

const mapDispatchToProps = dispatch => ({
  onGoToLoginClick: () => dispatch(goToLogin()),
  onGoToSignupClick: () => dispatch(goToSignup()),
  onGoToForgotPasswordClick: () => dispatch(goToLostPassword()),
  onModalOverlayClick: () => dispatch(closeModal()),
  onLogin: ({ email, password }) => dispatch(login({ email, password })),
  onSignup: ({ name, email, password }) => dispatch(createUser({ name, email, password })),
  onLostPassword: ({ email }) => dispatch(lostPassword({ email })),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)
