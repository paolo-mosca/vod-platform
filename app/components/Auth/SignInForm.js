import React, { PropTypes } from 'react'
import CustomInput from '../Form/CustomInput'
import {required, email} from '../Form/validations'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import {signIn} from '../../redux/modules/user'
import {browserHistory} from 'react-router'

@reduxForm({
  form: 'signin'
})
export default class SignUpForm extends React.Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit (values) {
    this.props.dispatch(signIn(values))
      .then((res) => {
        if (res.status === 200) {
          browserHistory.push('/')
        }
      })
  }
  render () {
    const {submitting, handleSubmit} = this.props
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          name='username'
          component={CustomInput}
          label='Username'
          placeholder='Username'
          type='text'
          validate={[required]} />
        <Field
          name='password'
          label='Password'
          component={CustomInput}
          placeholder='Password'
          type='password'
          validate={[required]} />
        <input
          className='btn btn-primary'
          type='submit'
          value='Sign in'
          disabled={submitting}
          onSubmit={handleSubmit(this.submit)} />
      </form>
    )
  }
}
