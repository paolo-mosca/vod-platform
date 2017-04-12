// @flow

import { connect } from 'react-redux'

import Header from '../components/Header'
import { logout } from '../actions/user'
import { goToSignup } from '../actions/modal'

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  onSignout: () => dispatch(logout()),
  onRegisterClick: () => dispatch(goToSignup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
