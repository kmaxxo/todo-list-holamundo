import React from 'react';

const NavHeader = props => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <span className="navbar-brand float-left">Grupo {props.user.group}</span>
        <span className="navbar-text float-right">
        Bienvenido, {props.user.name}
        </span>
      </div>
    </nav>
  )
}
  
export default NavHeader;
