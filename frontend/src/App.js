import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const showPlaceholders = process.env.REACT_APP_SHOW_PLACEHOLDERS === 'true';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverUrl}/login`, { username, password });
      setResponse(JSON.stringify(res.data));
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div style={{ width: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h2>Login con variables de entorno</h2>

      <form onSubmit={handleLogin}>
        <label>Usuario</label>
        <input
          type="text"
          value={username}
          placeholder={showPlaceholders ? "Ingresa tu usuario" : ""}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          placeholder={showPlaceholders ? "Ingresa tu contraseña" : ""}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />

        <button>Login</button>
      </form>

      <div style={{ marginTop: '20px', background: '#eee', padding: '10px' }}>
        Respuesta del servidor:
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default App;
