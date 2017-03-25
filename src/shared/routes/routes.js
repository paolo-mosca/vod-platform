// @flow

export default {
  RECIPE_LIST_PAGE: '/',

  recipeItem: (id: ?string) => `/api/recipes/${id || ':id'}`,
  fetchRecipesEndpoint: () => '/api/recipes/',

  fetchTagsEndpoint: () => '/api/tags/',
  createTagEndpoint: () => '/api/tags/',
  fetchTagEndpoint: (id: string) => `/api/tags/${id}`,
  updateTagEndpoint: (id: string) => `/api/tags/${id}`,
  deleteTagEndpoint: (id: string) => `/api/tags/${id}`,

  fetchUsersEndpoint: () => '/api/users/',
  createUserEndpoint: () => '/api/users/',
  fetchUserEndpoint: (id: string) => `/api/users/${id}`,
}
