// @flow

import { connect } from 'react-redux'

import Header from '../components/Header'
import { signout } from '../actions/user'
import { goToSignup } from '../actions/modal'

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  onSignout: () => dispatch(signout()),
  onRegisterClick: () => dispatch(goToSignup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
