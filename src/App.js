import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import PerfilCard from './components/PerfilCard';

function App() {
  const [userData, setUserData] = useState({
    nombre: '',
    nacionalidad: '',
    profesion: '',
  });
  const [profiles, setProfiles] = useState([]);

  // Cargar datos desde localStorage al iniciar la app
  useEffect(() => {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      setProfiles(JSON.parse(storedProfiles));
    }
  }, []); // Solo se ejecuta al cargar la aplicación

  // Guardar datos en localStorage cuando profiles cambie
  useEffect(() => {
    if (profiles.length > 0) {
      localStorage.setItem('profiles', JSON.stringify(profiles));
    }
  }, [profiles]); // Guarda automáticamente cuando profiles cambia

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfiles((prevProfiles) => [...prevProfiles, userData]);
    setUserData({ nombre: '', nacionalidad: '', profesion: '' }); // Limpiar el formulario después de enviar
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ fontFamily: "'Roboto', sans-serif", color: '#333' }}>Perfil de Usuarios</h1>
      <p className="mb-4 text-secondary">La aplicación permite a los usuarios ingresar y visualizar varios perfiles de información personal a través de un formulario, mostrando cada perfil en una tarjeta y manteniendo los datos de forma persistente en el almacenamiento local entre sesiones.</p>
      <Formulario userData={userData} setUserData={setUserData} handleSubmit={handleSubmit} />
      <div className="profile-cards mt-4">
        {profiles.map((profile, index) => (
          <PerfilCard key={index} userData={profile} />
        ))}
      </div>
    </div>
  );
}

export default App;
