// @flow

import { connect } from 'react-redux'

import SqueezeBanner from '../components/SqueezeBanner'
import { updateEmailInput, createUser } from '../actions/user'

const mapStateToProps = state => ({
  emailInput: state.user.emailInput,
  email: state.user.email,
})

const mapDispatchToProps = dispatch => ({
  updateEmailInput: value => dispatch(updateEmailInput(value)),
  onSubmit: email => dispatch(createUser({ email })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SqueezeBanner)
