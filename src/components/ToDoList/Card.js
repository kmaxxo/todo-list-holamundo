import React from 'react';

const Card = props => {

  let assignedToText = (props.item.assignedTo) ? 'Asignado a ' + props.item.assignedTo : 'Sin asignar'

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
      </div>
    </div>
  )
}

export default Card;

