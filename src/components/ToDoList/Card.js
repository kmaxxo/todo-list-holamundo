import React from 'react';
import { connect } from 'react-redux'
import { removeTodo } from '../../actions/todos'
import ViewCard from './ViewCard'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  props: ownProps
})


class Card extends React.Component {

  assignedToText = (this.props.item.assignedTo) ? 'Asignado a ' + this.props.item.assignedTo : 'Sin asignar'

  constructor(props) {
    super(props)
    this.state = {showEditTodo: false};
  }
  
  deleteTodo(idTodo) {
    this.props.dispatch(removeTodo(idTodo))
  }

  showTodoWindow() {
    this.setState({showEditTodo: true});
  }

  render() {
    return (
      <div className="card view p-2 mb-3">
        <div className="card-body">
          <p className="card-text">{this.props.item.text}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.item.createdAt}</small>
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">{this.assignedToText}</small>
          </footer>

          <footer>
            <button onClick={() => { this.deleteTodo(this.props.item.id) }}>Borrar</button>
            <button onClick={() => { this.showTodoWindow() }}>Editar</button>
          </footer>
        </div>

        <ViewCard todoItem={this.props.item} visible={this.state.showEditTodo} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Card)
