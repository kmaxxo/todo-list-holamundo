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

  let payload = action.payload

  switch (action.type) {
    case ADD_TODO:
      let today = new Date()
      let date =  new Date().toJSON().slice(0,10)
      let time = today.getHours() + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0')
      
      return [
        ...state,
        {
          completed: payload.completed,
          text: payload.text,
          assignedTo: payload.assignedTo,
          group: payload.group,
          createdAt: date+' '+time    
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== payload.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === payload.id ?
          { ...todo, text: payload.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === payload.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    default:
      return state
  }
}