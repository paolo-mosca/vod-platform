// @flow

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/helloAsync'
export const NOT_FOUND_PAGE_ROUTE = '/404'

export const helloEndpointRoute = (num: ?number) => `/api/sayHello/${num || ':num'}`
