import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO
} from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    completed: false,
    text: 'Use Redux',
    assignedTo: 'Roberto',
    group: 'IT',
    createdAt: '2020-06-14 18:52:02'
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:

      let today = new Date()
      let date =  new Date().toJSON().slice(0,10)
      let time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0')
      
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
          assignedTo: action.assignedTo,
          group: action.group,
          createdAt: date+' '+time    
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    default:
      return state
  }
}