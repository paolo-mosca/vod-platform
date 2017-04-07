export const validateRequired = value => !value && 'Required'
export const validateEmail = value => // eslint-disable-line no-confusing-arrow
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
