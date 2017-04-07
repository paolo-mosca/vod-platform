// @flow

import { connect } from 'react-redux'

import Header from '../components/Header'
import { signout } from '../actions/user'

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  onSignout: () => dispatch(signout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
