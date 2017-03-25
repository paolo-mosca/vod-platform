// @flow

export default {
  RECIPE_LIST_PAGE: '/',

  recipeItem: (id: ?string) => `/api/recipes/${id || ':id'}`,
  fetchRecipesEndpoint: () => '/api/recipes/',

  // tags
  fetchTagsEndpoint: () => '/api/tags/',
  createTagEndpoint: () => '/api/tags/',
  fetchTagEndpoint: (id: string) => `/api/tags/${id}`,
  updateTagEndpoint: (id: string) => `/api/tags/${id}`,
  deleteTagEndpoint: (id: string) => `/api/tags/${id}`,

  // skills
  fetchSkillsEndpoint: () => '/api/skills/',
  createSkillEndpoint: () => '/api/skills/',
  fetchSkillEndpoint: (id: string) => `/api/skills/${id}`,
  updateSkillEndpoint: (id: string) => `/api/skills/${id}`,
  deleteSkillEndpoint: (id: string) => `/api/skills/${id}`,

  // skills
  fetchChefsEndpoint: () => '/api/chefs/',
  createChefEndpoint: () => '/api/chefs/',
  fetchChefEndpoint: (id: string) => `/api/chefs/${id}`,
  updateChefEndpoint: (id: string) => `/api/chefs/${id}`,
  deleteChefEndpoint: (id: string) => `/api/chefs/${id}`,

  // categories
  fetchCategoriesEndpoint: () => '/api/categories/',
  createCategoryEndpoint: () => '/api/categories/',
  fetchCategoryEndpoint: (id: string) => `/api/categories/${id}`,
  updateCategoryEndpoint: (id: string) => `/api/categories/${id}`,
  deleteCategoryEndpoint: (id: string) => `/api/categories/${id}`,

  // ingredients
  fetchIngredientsEndpoint: () => '/api/ingredients/',
  createIngredientEndpoint: () => '/api/ingredients/',
  fetchIngredientEndpoint: (id: string) => `/api/ingredients/${id}`,
  updateIngredientEndpoint: (id: string) => `/api/ingredients/${id}`,
  deleteIngredientEndpoint: (id: string) => `/api/ingredients/${id}`,

  // equipments
  fetchEquipmentsEndpoint: () => '/api/equipments/',
  createEquipmentEndpoint: () => '/api/equipments/',
  fetchEquipmentEndpoint: (id: string) => `/api/equipments/${id}`,
  updateEquipmentEndpoint: (id: string) => `/api/equipments/${id}`,
  deleteEquipmentEndpoint: (id: string) => `/api/equipments/${id}`,

  // users
  fetchUsersEndpoint: () => '/api/users/',
  createUserEndpoint: () => '/api/users/',
  fetchUserEndpoint: (id: string) => `/api/users/${id}`,
}
