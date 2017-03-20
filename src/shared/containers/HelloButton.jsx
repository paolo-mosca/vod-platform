// @flow

import { connect } from 'react-redux'

import { sayHello } from '../actions/hello'
import Button from '../components/Button'

const mapStateToProps = () => ({
  label: 'say hello',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(sayHello('Hello!')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
