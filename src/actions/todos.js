import {
    ADD_TODO
  } from '../constants/ActionTypes'
  
export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})
