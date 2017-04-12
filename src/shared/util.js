// @flow

export const isProd = process.env.NODE_ENV === 'production'
export const hasAccessToRecipe = (user: Object, recipeId: string) =>
  user._id && (user.subscriptions.find(sub => sub.isActive) || user.recipes.includes(recipeId))
