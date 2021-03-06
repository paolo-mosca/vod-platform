// @flow

export default {
  RECIPE_LIST_PAGE: '/',
  RECIPE_CREATE_PAGE: '/create',
  ABOUT_PAGE: '/about',
  TERMS_PAGE: '/terms',
  PRIVACY_PAGE: '/privacy',

  recipeDetailPage: (id: ?string) => `/recipes/${id || ':id'}`,

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

  // learningPaths
  fetchLearningPathsEndpoint: () => '/api/learningPaths/',
  createLearningPathEndpoint: () => '/api/learningPaths/',
  fetchLearningPathEndpoint: (id: string) => `/api/learningPaths/${id}`,
  updateLearningPathEndpoint: (id: string) => `/api/learningPaths/${id}`,
  deleteLearningPathEndpoint: (id: string) => `/api/learningPaths/${id}`,

  // chefs
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

  // recipes
  fetchRecipesEndpoint: () => '/api/recipes/',
  createRecipeEndpoint: () => '/api/recipes/',
  fetchRecipeDetailsEndpoint: (id: string) => `/api/recipes/${id}`,
  updateRecipeEndpoint: (id: string) => `/api/recipes/${id}`,
  deleteRecipeEndpoint: (id: string) => `/api/recipes/${id}`,

  // users
  fetchUsersEndpoint: () => '/api/users/',
  createUserEndpoint: () => '/api/users/',
  fetchUserEndpoint: (id: string) => `/api/users/${id}`,
  loginEndpoint: () => '/api/users/login',
  lostPasswordEndpoint: () => '/api/users/lostPassword',
}
