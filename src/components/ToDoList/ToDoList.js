import React from 'react';
import './ToDoList.css';
import NewCard from './NewCard'
import Column from './Column'

const ToDoList = () => {
  return(
    <section>
      <NewCard />

      <div className="row">
        <Column title="Pendiente" class="todo" />
        <Column title="Completado" class="completed" />
      </div>
    </section>
  )
}

export default ToDoList