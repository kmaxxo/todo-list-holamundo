import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './components/Login'

const loggedIn = true

const routing = (
  <Router>
    <div className="container">
      <Route exact path="/">
        {loggedIn ? <App /> : <Login />}
      </Route>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
