import React from 'react';

const NavHeader = props => {

  let groupName = ''
  let userName = ''

  if (typeof props.user !== 'undefined') {
    groupName = props.user.group
    userName = props.user.name
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <span className="navbar-brand float-left">Grupo {groupName}</span>
        <span className="navbar-text float-right">
        Bienvenido, {userName}
        </span>
      </div>
    </nav>
  )
}
  
export default NavHeader;
