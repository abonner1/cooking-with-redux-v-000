// state = {recipes: []}

<<<<<<< HEAD
export default function recipes(state = [], action){
  switch(action.type) {
    case 'ADD_RECIPE':
      let id = uuidV4()
      let recipe = {...action.payload, id: id}
      return [...state, recipe]
    default:
      return state
=======

// store.dispatch({type: 'ADD_RECIPE', payload: {name: 'baba', calories: 80}})
export default function recipes(state = [{name: 'baba'}], action){
  switch (action.type) {
    case 'ADD_RECIPE':
    
    // [{name: 'baba', calories: 80}, ]
      return state.concat(action.payload)
      break;
    default:
      return state;
>>>>>>> 2a64a47dd771c60cc42e31a7457e5df8e66a48c4
  }
}

// store = {recipes: [{name: 'baba', calories: 80}], ingredients: []}
