import React from 'react';
import { Link } from 'react-router-dom'

class NavHeader extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            Grupo <b>{this.props.user && this.props.user.group}</b>
          </div>
          <ul class="nav navbar-nav">
            <li>Bienvenido, {this.props.user && this.props.user.name}</li>
            <li><Link to='/login'>Logout</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default NavHeader;
