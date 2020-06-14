import React from 'react';

const Login = () => {
  return (
    <form className="form-signin mt-5">
      <label for="inputUser" className="sr-only">Usuario</label>
      <input type="text" id="inputUser" className="form-control" placeholder="Usuario" required autofocus />
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  )
}
  
export default Login;
