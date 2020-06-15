import React from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signIn } from '../actions/loggedUser'

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(({users, dispatch}) => {

  const history = useHistory()

  const getUserByName = (userName) => {
    let result = users.filter(x => x.name === userName)
  
    if (result.length > 0) {
      return result[0]
    }
  
    return null
  }

  const loginAction = (userName) => {
    let userInfo = getUserByName(userName)

    if (userInfo) {
      dispatch(signIn(userInfo))
      history.push('/')
    }
  }

  const submitLoginForm = (e) => {
    e.preventDefault()
    loginAction(e.target.username.value)
  }

  return (
    <>
      <form className="form-signin mt-5" onSubmit={submitLoginForm}>
        <label className="sr-only">Usuario</label>
        <input type="text" name="username" className="form-control" placeholder="Usuario" required autoFocus />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
      <div className="mt-5">
        <p>Listado de usuarios disponibles</p>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <button onClick={() => { loginAction(user.name) }} className="mr-2">Entrar</button>
              <b className="mr-2">{user.name}</b>
              <small>({user.group})</small>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
})
