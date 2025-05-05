require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inicialización
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const productoRoutes = require('./routes/productos');
app.use('/api/productos', productoRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error de conexión:', error));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Gestión Menú FoodPlease activa');
});

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
