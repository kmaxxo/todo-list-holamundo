import React from 'react';
import Card from './Card';

const Column = props => {
  return (
    <div className={`col ${props.class}`}>
        <h5>{props.title}</h5>

        <div className="row container d-flex justify-content-center">
          <Card />
          <Card />
        </div>
    </div>
  )
}

export default Column;

