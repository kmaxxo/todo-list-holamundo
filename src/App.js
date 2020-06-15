import React from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import NavHeader from './components/NavHeader'
import ToDoList from './components/ToDoList/ToDoList'
import Footer from './components/Footer'

const mapStateToProps = state => ({
  loggedUser: state.loggedUser
})

export default connect(mapStateToProps)(({loggedUser}) => {

  const history = useHistory()

  const isLoggedUser = () => {
    if (! loggedUser.length) {
      history.push('/login')
    }

    return loggedUser[0]
  }

  const user = isLoggedUser()

  return (
    <>
      <NavHeader user={user} />
      <ToDoList />
      <Footer />
    </>
  )
})

