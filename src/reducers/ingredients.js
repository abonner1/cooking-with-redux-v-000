import uuidV4  from 'uuid/v4';

<<<<<<< HEAD
export default function ingredients(state = [], action){
  switch(action.type) {
    case 'CREATE_INGREDIENT':
      let ingredient = {...action.payload, id: uuidV4()}
      return [...state, ingredient]
=======
export default function ingredients(state = [{id: 1, name: 'baba'}, {id: 2, name: 'tomato sauce'}, {id: 3, name: 'peanuts'}], action){

  switch (action.type) {
    case 'ADD_RECIPE':
      return state.concat({name: 'foobar'})
      break;
    case 'EDIT_RECIPE':
      
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
    default:
      return state
  }
}

function editIngredient(ingredient, payload){
  // {name: 'baba', calories: 80}
    // {name: 'babaganoush'}
  return Object.assign({}, payload, ingredient)
  // {name: 'babaganoush', calories: 80}

}

// dispatch({type: 'EDIT_RECIPE', payload: {id: 1, name: 'babaganoush'}})
