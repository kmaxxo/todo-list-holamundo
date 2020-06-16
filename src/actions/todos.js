import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO
  } from '../constants/ActionTypes'
  
export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const removeTodo = payload => ({
  type: DELETE_TODO,
  payload
})

export const updateTodo = payload => ({
  type: EDIT_TODO,
  payload
})