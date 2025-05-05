import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container, TextField, Button, Typography, Box, MenuItem
} from '@mui/material';

const categorias = [
  'Plato Principal', 'Entrada', 'Ensaladas', 'Bebidas', 'Postres', 'Plato Rápido'
];

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: ''
  });

  // Obtener datos actuales del producto
  useEffect(() => {
    axios.get(`http://localhost:5000/api/productos/${id}`)
      .then((res) => setProducto(res.data))
      .catch((err) => {
        console.error('Error al obtener producto:', err);
        alert('No se pudo cargar el producto');
      });
  }, [id]);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/productos/${id}`, producto)
      .then(() => {
        alert('Producto actualizado correctamente');
        navigate('/inventario');
      })
      .catch((err) => {
        console.error(err);
        alert('Error al actualizar producto');
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Editar Producto</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth margin="normal" name="nombre" label="Nombre"
          value={producto.nombre} onChange={handleChange} required
        />
        <TextField
          fullWidth margin="normal" name="descripcion" label="Descripción"
          value={producto.descripcion} onChange={handleChange}
        />
        <TextField
          fullWidth margin="normal" name="precio" label="Precio"
          type="number" value={producto.precio} onChange={handleChange} required
        />
        <TextField
          fullWidth margin="normal" name="categoria" label="Categoría"
          select value={producto.categoria} onChange={handleChange} required
        >
          {categorias.map((cat) => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </TextField>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={() => navigate('/inventario')}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            Guardar Cambios
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditarProducto;
