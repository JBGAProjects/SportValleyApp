/**
 * mock-server.js
 *
 * Servidor mock simple usando Express.
 * Permite simular endpoints de autenticación y datos de usuario.
 * Útil para desarrollo de frontend sin backend real.
 */

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir llamadas desde Expo
app.use(cors());

// Mock de usuarios
const users = [
  { id: 1, email: 'test@sportvalley.com', password: '123456', name: 'Usuario Test' },
];

/**
 * POST /login
 * Recibe email y password
 * Retorna un token simulado
 */
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Simulamos un token JWT (solo mock)
    const token = 'mock-jwt-token-123456';
    res.json({ accessToken: token, user: { id: user.id, name: user.name, email: user.email } });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

/**
 * GET /profile
 * Retorna información de usuario mock
 * Se puede agregar middleware de autenticación más adelante
 */
app.get('/profile', (req, res) => {
  // Simulamos usuario logueado
  res.json({ id: 1, name: 'Usuario Test', email: 'test@sportvalley.com' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Mock server corriendo en http://localhost:${PORT}`);
});
