// @flow

import { connect } from 'react-redux'

import Button from '../components/Button'
import { sayHelloAsync } from '../actions/hello'

const mapStateToProps = () => ({
  label: 'Async button!',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(sayHelloAsync(1234)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
