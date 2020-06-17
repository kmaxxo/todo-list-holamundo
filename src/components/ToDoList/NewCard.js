import React from 'react';
import { connect } from 'react-redux'
import { addTodo, updateTodo } from '../../actions/todos'

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  loggedUser: state.loggedUser,
  props: ownProps
})

class NewCard extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: this.props.itemData ? this.props.itemData.text : '',
      completed: this.props.itemData && this.props.itemData.completed ? true : false,
      assignedTo: this.props.itemData ? this.props.itemData.assignedTo : ''
    }

    this.newTodo = this.newTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  resetForm(target) {
    this.setState({
      text: '',
      completed: false,
      assignedTo: ''
    })

    target.text.focus()
  }

  newTodo (e) {

    e.preventDefault()

    let target = e.target

    this.props.dispatch(addTodo({
      completed: target.completed.checked,
      text: target.text.value,
      assignedTo: target.assignedTo.value,
      group: this.props.loggedUser[0].group
    }))

    this.resetForm(target)
  }

  editTodo (e) {
    
    e.preventDefault()

    let target = e.target
    
    this.props.dispatch(updateTodo({
      id: this.props.itemData.id,
      completed: target.completed.checked,
      text: target.text.value,
      assignedTo: target.assignedTo.value,
      group: this.props.loggedUser[0].group
    }))
  }

  handleChange (e) {
    let target = e.target
    
    let value = target.name === 'completed' ? target.checked : target.value
    let name = target.name

    this.setState({[name]: value})
  }

  sameGroupUsers (groupName = ((typeof this.props.loggedUser[0] !== 'undefined') ? this.props.loggedUser[0].group : '')) {
    return this.props.users.filter(x => x.group === groupName)
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="card p-2 mt-3 mb-3">
            <h5>Nueva tarea</h5>
            <form onSubmit={! this.props.itemData ? this.newTodo : this.editTodo}>
  
              <div className="form-group text-right">
                <label>Completo <input name="completed" type="checkbox" onChange={this.handleChange} checked={this.state.completed} /></label>
              </div>
  
              <div className="form-group">
                <input name="text" className="form-control" autoFocus required onChange={this.handleChange} value={this.state.text} />
              </div>
  
              <div className="form-group">
                <label>Asignar a:</label>
                <select className="form-control" name="assignedTo" onChange={this.handleChange} value={this.state.assignedTo}>
                  <option disabled value="">Selecciona alguien</option>
                  {this.sameGroupUsers().map((user, index) => (
                    <option key={index} value={user.name}>{user.name}</option>
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
  }
}

export default connect(mapStateToProps)(NewCard)



















/*
export default connect(mapStateToProps)(({users, loggedUser, props, dispatch}) => {

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

    if ( !props.itemData) {
      dispatch(addTodo({
        completed: target.completed.checked,
        text: target.text.value,
        assignedTo: (userInfo) ? userInfo.name : '',
        group: loggedUser[0].group
      }))
    } else {
      dispatch(updateTodo({
        id: props.itemData.id,
        completed: target.completed.checked,
        text: target.text.value,
        assignedTo: (userInfo) ? userInfo.name : '',
        group: loggedUser[0].group
      }))
    }

    target.reset()
    target.text.focus()
  }

  const handleChange = (e) => {
    
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
              <input name="text" className="form-control" autoFocus required onChange={handleChange} value={props.itemData && props.itemData.text} />
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
*/