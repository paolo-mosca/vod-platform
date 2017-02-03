import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from '../../Form/CustomInput'
import {required} from '../../Form/validations'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../../utils/form'

@connect((state) => {
  return {skillsLearntOptions: getSelectOptions(state.skilsLearnt, 'id')}
})
export default class SkillsLearnt extends Component {
  componentDidMount () {
    const {fields} = this.props
    if (fields.length === 0) {
      fields.push({})
    }
  }
  render () {
    const {fields, skillsLearntOptions} = this.props
    return (
      <div>
        <label>Skills Learnt </label>
        <ol className='list'>
          {fields.map((skill, index) => {
            return (
              <li key={index} style={{paddingBottom: 10}}>
                <Field
                  name={`${skill}.name`}
                  label='Skill name'
                  component={CustomInput}
                  type='select'
                  placeholder='skill (e.g. grill a fish)'
                  options={skillsLearntOptions}
                  validate={required} />
                <div>
                  <a onClick={() => fields.remove(index)}>Remove</a>
                </div>
              </li>
            )
          })}
        </ol>
        <div>
          <a onClick={() => fields.push({}) }>Add skill learnt</a>
        </div>
      </div>
    )
  }
}
