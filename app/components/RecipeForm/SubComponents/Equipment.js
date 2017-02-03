import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from '../../Form/CustomInput'
import {required, number} from '../../Form/validations'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../../utils/form'

@connect((state) => {
  return {equipmentOptions: getSelectOptions(state.equipment, 'id')}
})
export default class Equipment extends Component {
  componentDidMount () {
    const {fields} = this.props
    if (fields.length === 0) {
      fields.push({})
    }
  }
  render () {
    const {fields, equipmentOptions} = this.props
    return (
      <div>
        <label>Equipment </label>
        <ol className='list'>
          {fields.map((equipment, index) => {
            return (
              <li key={index} style={{paddingBottom: 10}}>
                <Field
                  name={`${equipment}.equipment`}
                  component={CustomInput}
                  label='Equipment'
                  type='select'
                  placeholder='equipment (e.g. pan)'
                  options={equipmentOptions}
                  validate={required} />
                <Field
                  name={`${equipment}.quantity`}
                  label='Quantity'
                  component={CustomInput}
                  placeholder='Quantity equipment (e.g. 2)'
                  type='text'
                  validate={[required, number]} />
                <div>
                  <a onClick={() => fields.remove(index)}>Remove</a>
                </div>
              </li>
            )
          })}
        </ol>
        <div>
          <a onClick={() => fields.push({}) }>Add equipment</a>
        </div>
      </div>
    )
  }
}
