import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from '../Form/CustomInput'
import {required, url} from '../Form/validations'

export default class Steps extends Component {
  componentDidMount () {
    const {fields} = this.props
    if (fields.length === 0) {
      fields.push({})
    }
  }
  render () {
    const {fields} = this.props
    return (
      <div>
        <label>Steps</label>
        <ul className='list'>
          {fields.map((step, index) => {
            return (
              <li key={index} style={{paddingBottom: 10}}>
                <div className=''>
                  <div className='clearfix'>
                    <label>Step {index + 1}</label>
                    <div className='pull-right'><a onClick={() => fields.remove(index)}>Remove</a></div>
                  </div>
                  <Field
                    name={`${step}.picture`}
                    label='Picture'
                    component={CustomInput}
                    placeholder='Picture URL'
                    type='text'
                    validate={[required, url]} />
                  <Field
                    name={`${step}.description`}
                    label='Description'
                    component={CustomInput}
                    placeholder='Description'
                    type='text'
                    validate={required} />
                  <Field
                    name={`${step}.tip`}
                    label='Tip'
                    component={CustomInput}
                    placeholder='Tip'
                    type='text'
                    validate={required} />
                </div>
             </li>
            )
          })}
          <a onClick={() => fields.push({}) }>Add step</a>
        </ul>
      </div>
    )
  }
}
