<<<<<<< HEAD
export default function recipeForm(state = {name: "", ingredientIds: []}, action){
  switch(action.type){
    case "ADD_INGREDIENT":
      return {...state, ingredientIds: [...state.ingredientIds, action.payload]}
    default:
      return state;
  }
=======
export default function recipeForm(state = {ingredientIds: []}, action){
  return state;
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
}
