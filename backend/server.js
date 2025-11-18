require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    return res.json({ ok: true, message: 'Login correcto (simulado)' });
  }
  return res.status(400).json({ ok: false, message: 'Faltan datos' });
});

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});
