import isEmail from 'validator/lib/isEmail'
import isURL from 'validator/lib/isURL'

export function required (value) {
  return value ? null : 'Required'
}

export function email (value) {
  return isEmail(value) ? null : 'Invalid email'
}

export function number (value) {
  return typeof value === 'number' ? null : 'Not a number'
}

export function url (value) {
  return isURL(value) ? null : 'Invalid URL'
}
