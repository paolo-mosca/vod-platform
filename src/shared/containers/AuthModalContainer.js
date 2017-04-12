// @flow

import { connect } from 'react-redux'

import { login, createUser, lostPassword } from '../actions/user'
import { goToLogin, goToSignup, goToLostPassword, goToYearlyPayment, goToLifetimePayment,
  togglePaymentMode, closeModal } from '../actions/modal'
import AuthModal from '../components/AuthModal'

const mapStateToProps = state => Object.assign({}, state.user, { modalStatus: state.modal.status })

const mapDispatchToProps = dispatch => ({
  onGoToLoginClick: () => dispatch(goToLogin()),
  onGoToSignupClick: () => dispatch(goToSignup()),
  onGoToForgotPasswordClick: () => dispatch(goToLostPassword()),
  onModalOverlayClick: () => dispatch(closeModal()),
  onLogin: ({ email, password }) => dispatch(login({ email, password })),
  onSignup: ({ name, email, password }) => dispatch(createUser({ name, email, password })),
  onLostPassword: ({ email }) => dispatch(lostPassword({ email })),
  onGoToYearlyPaymentClick: () => dispatch(goToYearlyPayment()),
  onGoToLifetimePaymentClick: () => dispatch(goToLifetimePayment()),
  onTogglePaymentModeClick: () => dispatch(togglePaymentMode()),
  onCloseModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal)
