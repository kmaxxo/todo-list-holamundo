import React from 'react';
import { Link } from 'react-router-dom'

class NavHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            Grupo <b>{this.props.user && this.props.user.group}</b>
          </div>
          <ul className="nav navbar-nav">
            <li>Bienvenido, {this.props.user && this.props.user.name}</li>
            <li><Link to='/login'>Logout</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default NavHeader;
