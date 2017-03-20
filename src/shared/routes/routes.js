// @flow

export default {
  RECIPE_LIST_PAGE: '/',

  recipeItem: (id: ?string) => `/api/recipes/${id || ':id'}`,
  helloEndpointRoute: (num: ?number) => `/api/sayHello/${num || ':num'}`,
  fetchRecipesEndpoint: () => '/api/recipes/',
}
