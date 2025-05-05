import { useState } from 'react';
import axios from 'axios';
import {
  Container, TextField, Button, Typography, Box, MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categorias = [
  'Plato Principal', 'Entrada', 'Ensaladas', 'Bebidas', 'Postres', 'Plato Rápido'
];

const AgregarProducto = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/productos', producto)
      .then(() => {
        alert('Producto agregado con éxito');
        navigate('/inventario');
      })
      .catch((err) => {
        console.error(err);
        alert('Error al agregar producto');
      });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Agregar Producto</Typography>
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
            Volver
        </Button>
        <Button type="submit" variant="contained">
            Guardar
        </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AgregarProducto;
