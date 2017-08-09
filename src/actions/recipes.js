export function addRecipe(recipe) {
  return {
    type: "ADD_RECIPE",
    payload: recipe,
  }
}

export function addIngredients(ingredients) {
  return {
    type: "ADD_INGREDIENTS",
    payload: ingredients,
  }
}
