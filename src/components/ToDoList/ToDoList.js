import React from 'react';
import { connect } from 'react-redux'
import './ToDoList.css';
import NewCard from './NewCard'
import Column from './Column'

const mapStateToProps = state => ({
  todos: state.todos.filter(t => !t.completed),
  completed: state.todos.filter(t => t.completed)
})

export default connect(mapStateToProps)(({todos, completed}) => {
  return(
    <section>
      <NewCard />

      <div className="row">
        <Column title="Pendiente" class="todo" list={todos} />
        <Column title="Completado" class="completed" list={completed} />
      </div>
    </section>
  )
})