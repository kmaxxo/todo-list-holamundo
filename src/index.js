import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './components/Login'

const store = createStore(reducer)

const routing = (
  <Provider store={store}>
    <Router>
      <div className="container">
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
