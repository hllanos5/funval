import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express con JWT!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});