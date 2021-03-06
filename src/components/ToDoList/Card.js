import React from 'react';
import { connect } from 'react-redux'
import { removeTodo } from '../../actions/todos'
import NewCard from './NewCard'
import Modal from 'react-bootstrap/Modal'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  props: ownProps
})

class Card extends React.Component {

  constructor(props) {
    super(props)
    this.state = {showEditTodo: false}
    this.handleChildUnmount = this.handleChildUnmount.bind(this)
  }
  
  deleteTodo(idTodo) {
    this.props.dispatch(removeTodo(idTodo))
  }

  showTodoWindow() {
    this.setState({showEditTodo: true})
  }

  handleChildUnmount(){
    this.setState({showEditTodo: false});
  }

  render() {
    return (
      <div className="card view p-2 mb-3 w-100">
        <div className="card-body">
          <p className="card-text">{this.props.item.text}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.item.createdAt}</small>
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">{this.props.item.assignedTo ? 'Asignado a ' + this.props.item.assignedTo : 'Sin asignar'}</small>
          </footer>

          <footer>
            <button onClick={() => { this.deleteTodo(this.props.item.id) }}>Borrar</button>
            <button onClick={() => { this.showTodoWindow() }}>Editar</button>
          </footer>
        </div>
        
        <Modal
          show={this.state.showEditTodo}
          onHide={this.handleChildUnmount}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Editar Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewCard modalClass="modal" unmountMe={this.handleChildUnmount} itemData={this.props.item} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Card)
