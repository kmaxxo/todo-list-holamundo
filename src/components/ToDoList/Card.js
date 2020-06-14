import React from 'react';

const Card = props => {
  return (
    <>
      <div className="card view p-2 mb-3">
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="card-text">
            <small className="text-muted">2020-06-12 12:30:28</small>
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">Asignado a Roberto</small>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Card;

