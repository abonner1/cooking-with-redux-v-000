import uuidV4  from 'uuid/v4';

export default function recipes(state = [], action){
  switch(action.type) {
    case 'ADD_RECIPE':
      let id = uuidV4()
      let recipe = {...action.payload, id: id}
      return [...state, recipe]
    default:
      return state
  }
}
