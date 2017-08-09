export default function recipeForm(state = {name: "", ingredientIds: []}, action){
  switch(action.type){
    case "ADD_INGREDIENT":
      return {...state, ingredientIds: [...state.ingredientIds, action.payload]}
    default:
      return state;
  }
}
