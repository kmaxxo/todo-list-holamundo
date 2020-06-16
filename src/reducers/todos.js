import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO
} from '../constants/ActionTypes'

export default function todos(state = [], action) {

  switch (action.type) {
    case ADD_TODO:
      let today = new Date()
      let date =  new Date().toJSON().slice(0,10)
      let time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0')
      
      return [
        ...state,
        {
          id: Date.now(),
          completed: action.payload.completed,
          text: action.payload.text,
          assignedTo: action.payload.assignedTo,
          group: action.payload.group,
          createdAt: date+' '+time    
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.payload
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ?
          { ...todo, 
            completed: action.payload.completed,
            text: action.payload.text,
            assignedTo: action.payload.assignedTo,
            group: action.payload.group,
          } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    default:
      return state
  }
}