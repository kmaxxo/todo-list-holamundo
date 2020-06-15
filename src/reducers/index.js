import { combineReducers } from 'redux'
import users from './users'
import todos from './todos'
import loggedUser from './loggedUser'

const rootReducer = combineReducers({
  users,
  todos,
  loggedUser
})

export default rootReducer