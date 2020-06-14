import React from 'react';

const NewCard = props => {
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
              <select className="form-control">
                <option disabled>Selecciona alguien</option>
                <option value="2">Roberto</option>
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
}

export default NewCard;

