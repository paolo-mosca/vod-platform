import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from '../../Form/CustomInput'
import {required, number} from '../../Form/validations'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../../../utils/form'

@connect((state) => {
  return {ingredientOptions: getSelectOptions(state.ingredients, 'id')}
})
export default class Ingredients extends Component {
  componentDidMount () {
    const {fields} = this.props
    if (fields.length === 0) {
      fields.push({})
    }
  }
  render () {
    const {fields, ingredientOptions} = this.props
    return (
      <div>
        <label>Recipe Ingredients </label>
        <ul className='list'>
          {fields.map((ingredient, index) => {
            return (
              <li key={index} style={{paddingBottom: 10}}>
                <Field
                  name={`${ingredient}.ingredient`}
                  label='Ingredient'
                  component={CustomInput}
                  type='select'
                  placeholder='Ingredient (e.g. bread)'
                  options={ingredientOptions}
                  validate={required} />
                <Field
                  name={`${ingredient}.quantity`}
                  label='Quantity'
                  component={CustomInput}
                  placeholder='Quantity ingredient (e.g. 2)'
                  type='text'
                  validate={[required, number]} />
                <Field
                  name={`${ingredient}.unit`}
                  label="Unit"
                  component={CustomInput}
                  placeholder='Quantity unit (e.g. slice)'
                  type='text'
                  validate={required} />
                <div>
                  <a onClick={() => fields.remove(index)}>Remove</a>
                </div>
              </li>
            )
          })}
        </ul>
        <div><a onClick={() => fields.push({}) }>Add Ingredient</a></div>
      </div>
    )
  }
}
