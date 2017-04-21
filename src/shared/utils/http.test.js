import { optionsWithHeaders } from './http'

describe('shared/utils/http/optionsWithHeaders', () => {
  it('should return an empty object', () => {
    expect(optionsWithHeaders({})).toEqual({})
  })

  it('should return the same object', () => {
    const optionsWithoutUserInLocalStorage = { some: 'option' }
    expect(optionsWithHeaders(optionsWithoutUserInLocalStorage))
      .toBe(optionsWithoutUserInLocalStorage)
  })

  it('should add {Authorization: value} to object', () => {
    localStorage.setItem('user', JSON.stringify({ token: 'someToken' }))
    const optionsWithUserInLocalStorage = {
      some: 'option',
      headers: { some: 'header' },
    }
    expect(optionsWithHeaders(optionsWithUserInLocalStorage))
      .toEqual({
        ...optionsWithUserInLocalStorage,
        some: 'option',
        headers: {
          some: 'header',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}`,
        },
      })
  })
})
