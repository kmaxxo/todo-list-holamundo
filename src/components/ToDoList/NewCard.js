import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todos'

const mapStateToProps = state => ({
  users: state.users,
  loggedUser: state.loggedUser
})

export default connect(mapStateToProps)(({users, loggedUser, dispatch}) => {

  const getUserById = userId => {
    let result = users.filter(x => x.id === parseInt(userId))
  
    if (result.length > 0) {
      return result[0]
    }
  
    return null
  }

  const newTodo = (e) => {
    e.preventDefault()

    let target = e.target
    let userInfo = getUserById(target.assign.value)

    dispatch(addTodo({
      completed: target.completed.checked,
      text: target.text.value,
      assignedTo: (userInfo) ? userInfo.name : '',
      group: loggedUser[0].group
    }))

    target.reset()
    target.text.focus()
  }

  const sameGroupUsers = (groupName = ((typeof loggedUser[0] !== 'undefined') ? loggedUser[0].group : '')) => {
    return users.filter(x => x.group === groupName)
  }

  return (
    <div className="row">
      <div className="col">
        <div className="card p-2 mt-3 mb-3">
          <h5>Nueva tarea</h5>
          <form onSubmit={newTodo}>

            <div className="form-group text-right">
              <label>Completo <input name="completed" type="checkbox" /></label>
            </div>

            <div className="form-group">
              <input name="text" className="form-control" autoFocus required />
            </div>

            <div className="form-group">
              <label>Asignar a:</label>
              <select className="form-control" defaultValue="" name="assign">
                <option disabled value="">Selecciona alguien</option>
                {sameGroupUsers().map((user, index) => (
                  <option key={index} value={user.id}>{user.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group text-right">
              <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
})
