import {
  SIGN_IN
} from '../constants/ActionTypes'

export default function loggedUser(state = [], action) {

  let payload = action.payload

  switch (action.type) {
    case SIGN_IN:
          
      return [
        {
          id: payload.id,
          name: payload.name,
          group: payload.group    
        }
      ]

    default:
      return state
  }
}