const express = require('express');
const router = express.Router();
const {
  obtenerProductos,
  crearProducto,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productosController');

// Ruta base: /api/productos
router.get('/', obtenerProductos);
router.post('/', crearProducto);
router.get('/:id', obtenerProductoPorId);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;