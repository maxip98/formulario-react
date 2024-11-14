import React from 'react';

function PerfilCard({ userData }) {
  return (
    <div className="card text-center mb-3" style={{ borderColor: '#0066cc' }}>
      <div className="card-body" style={{ backgroundColor: '#e6f2ff' }}>
        <h5 className="card-title" style={{ color: '#0066cc' }}>Perfil</h5>
        <p className="card-text"><strong>Nombre:</strong> {userData.nombre || 'No ingresado'}</p>
        <p className="card-text"><strong>Nacionalidad:</strong> {userData.nacionalidad || 'No ingresada'}</p>
        <p className="card-text"><strong>Profesión:</strong> {userData.profesion || 'No ingresada'}</p>
      </div>
    </div>
  );
}

export default PerfilCard;
