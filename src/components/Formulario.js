import React from 'react';

function Formulario({ userData, setUserData, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Nombre y Apellido</label>
        <input
          type="text"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
          className="form-control"
          placeholder="Ingrese su nombre y apellido"
        />
      </div>
      <div className="form-group">
        <label>Nacionalidad</label>
        <input
          type="text"
          name="nacionalidad"
          value={userData.nacionalidad}
          onChange={handleChange}
          className="form-control"
          placeholder="Ingrese su nacionalidad"
        />
      </div>
      <div className="form-group">
        <label>Profesión</label>
        <input
          type="text"
          name="profesion"
          value={userData.profesion}
          onChange={handleChange}
          className="form-control"
          placeholder="Ingrese su profesión"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Enviar</button>
    </form>
  );
}

export default Formulario;
