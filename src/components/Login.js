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

  const loginAction = (e) => {
    e.preventDefault()

    let target = e.target

    let userInfo = getUserByName(target.username.value)

    if (userInfo) {
      dispatch(signIn(userInfo))
      history.push('/')
    }

  }

  return (
    <>
      <form className="form-signin mt-5" onSubmit={loginAction}>
        <label className="sr-only">Usuario</label>
        <input type="text" name="username" className="form-control" placeholder="Usuario" required autoFocus />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
      <div className="mt-5">
        <p>Listado de usuarios disponibles</p>
        <ul>
          {users.map((user, index) => (
            <li key={index}><b>{user.name}</b> ({user.group})</li>
          ))}
        </ul>
      </div>
    </>
  )
})
