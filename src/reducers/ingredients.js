import uuidV4  from 'uuid/v4';

export default function ingredients(state = [], action){
  switch(action.type) {
    case 'CREATE_INGREDIENT':
      let ingredient = {...action.payload, id: uuidV4()}
      return [...state, ingredient]
    default:
      return state
  }
}
