// @flow

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'preloaded message from server!' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'preloaded (async) message from server!' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from server: ${num}`,
})
