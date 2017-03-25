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

  fetchSkillsEndpoint: () => '/api/skills/',
  createSkillEndpoint: () => '/api/skills/',
  fetchSkillEndpoint: (id: string) => `/api/skills/${id}`,
  updateSkillEndpoint: (id: string) => `/api/skills/${id}`,
  deleteSkillEndpoint: (id: string) => `/api/skills/${id}`,

  fetchIngredientsEndpoint: () => '/api/ingredients/',
  createIngredientEndpoint: () => '/api/ingredients/',
  fetchIngredientEndpoint: (id: string) => `/api/ingredients/${id}`,
  updateIngredientEndpoint: (id: string) => `/api/ingredients/${id}`,
  deleteIngredientEndpoint: (id: string) => `/api/ingredients/${id}`,

  fetchUsersEndpoint: () => '/api/users/',
  createUserEndpoint: () => '/api/users/',
  fetchUserEndpoint: (id: string) => `/api/users/${id}`,
}
