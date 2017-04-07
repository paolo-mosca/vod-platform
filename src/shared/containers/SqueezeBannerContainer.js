// @flow

import { connect } from 'react-redux'

import SqueezeBanner from '../components/SqueezeBanner'
import { createUser } from '../actions/user'

const mapStateToProps = state => ({
  email: state.user.email,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email }) => dispatch(createUser({ email })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SqueezeBanner)
