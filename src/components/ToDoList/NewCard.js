import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(({users}) => {
  return (
    <div className="row">
      <div className="col">
        <div className="card p-2 mt-3 mb-3">
          <h5>Nueva tarea</h5>
          <form>

            <div className="form-group text-right">
              <label>Completo <input type="checkbox" /></label>
            </div>

            <div className="form-group">
              <textarea className="form-control" rows="3"></textarea>
            </div>

            <div className="form-group">
              <label>Asignar a:</label>
              <select className="form-control" defaultValue="">
                <option disabled value="">Selecciona alguien</option>
                {users.map((user, index) => (
                  <option key={index} value={user.id}>{user.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group text-right">
              <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
})
