import routes from './routes'

test('recipeItemRoute', () => {
  expect(routes.recipeItem()).toBe('/api/recipes/:id')
  expect(routes.recipeItem(1234)).toBe('/api/recipes/1234')
})
