import express from 'express';
import { generateToken, verifyToken } from './auth.js';

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  // Aquí verificarías las credenciales del usuario, por simplicidad, omitiremos este paso
  const { username, password } = req.body;

  // Supongamos que la autenticación es exitosa
  const token = generateToken({ username });

  res.json({ token });
});

app.get('/protected', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    const decoded = verifyToken(token.split(' ')[1]);
    res.json({ message: `Bienvenido, ${decoded.username}!` });
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});