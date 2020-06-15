import {
  SIGN_IN
} from '../constants/ActionTypes'

export const signIn = payload => ({
  type: SIGN_IN,
  payload
})
