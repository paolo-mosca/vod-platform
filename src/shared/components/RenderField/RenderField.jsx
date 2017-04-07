// @flow

import React from 'react'

type Props = {
  input: any,
  className: string,
  placeholder: string,
  type: string,
  meta: {
    touched: boolean,
    error: ?string,
  }
};

const RenderField = ({ input, className, placeholder, type, meta: { touched, error } }: Props) =>
  <div className="input-container">
    <input {...input} className={className} placeholder={placeholder} type={type} />
    {touched && error && <span className="input-error">{error}</span>}
  </div>

export default RenderField
