import React from 'react';
import { connect } from 'react-redux'
import { removeTodo } from '../../actions/todos'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  props: ownProps
})

export default connect(mapStateToProps)(({todos, props, dispatch}) => {

  let assignedToText = (props.item.assignedTo) ? 'Asignado a ' + props.item.assignedTo : 'Sin asignar'

  const deleteTodo = (idTodo) => {
    dispatch(removeTodo(idTodo))
  }

  return (
    <div className="card view p-2 mb-3">
      <div className="card-body">
        <p className="card-text">{props.item.text}</p>
        <p className="card-text">
          <small className="text-muted">{props.item.createdAt}</small>
        </p>
        <footer className="blockquote-footer">
          <small className="text-muted">{assignedToText}</small>
        </footer>

        <footer>
          <button onClick={() => { deleteTodo(props.item.id) }}>Borrar</button>
          <button>Editar</button>
        </footer>
      </div>
    </div>
  )
})
