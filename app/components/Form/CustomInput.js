import React, { PropTypes } from 'react'
import Select from 'react-select'
import classnames from 'classnames'

function formatSelectValue (data) {
  if (!Array.isArray(data)) {
    return data && data.value
  }
  return data.map((opt) => opt.value)
}

export default function CustomInput ({
  input,
  label,
  helpText,
  placeholder,
  type,
  readOnly,
  options,
  multi,
  className,
  meta: {touched, error}
}) {
  const field = (type === 'select')
    ? <Select
      {...input}
      placeholder={placeholder}
      options={options}
      multi={multi}
      onChange={(option) => { input.onChange(formatSelectValue(option)) } }
      onBlur={(option) => input.onChange(formatSelectValue(option))} />
    : <input {...input} type={type || 'text'} className='form-control' placeholder={placeholder} readOnly={readOnly} />
  return (
    <div className={classnames('form-group', className)}>
      <label className='col-xs-2'>{label}</label>
      <div className='col-xs-10'>
        {field}
        <span className='help-block'>{helpText}</span>
        {touched && error && <span style={{color: 'red'}}>{error}</span>}
      </div>
    </div>
  )
}
