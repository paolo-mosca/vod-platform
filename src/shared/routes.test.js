import { helloEndpointRoute } from './routes'

test('helloEndpointRoute', () => {
  it('should generate route', () => {
    expect(helloEndpointRoute()).toBe('/api/sayHello/:num')
    expect(helloEndpointRoute(1234)).toBe('/api/sayHello/1234')
  })
})
