export function addIngredient(ingredient) {
  return {
    type: "ADD_INGREDIENT",
    payload: ingredient,
  }
}

export function createIngredient(ingredient) {
  return {
    type: "CREATE_INGREDIENT",
    payload: ingredient,
  }
}
