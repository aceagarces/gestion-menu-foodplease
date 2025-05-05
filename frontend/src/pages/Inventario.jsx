import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper
} from '@mui/material';

const Inventario = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/productos')
      .then((res) => setProductos(res.data))
      .catch((err) => console.error('Error al obtener productos:', err));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" onClick={() => navigate('/agregar-producto')}>
            Agregar Producto
        </Button>
      </Box>
      <Typography variant="h4" gutterBottom>
        Inventario de Productos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Disponible</TableCell>
              <TableCell align="center" colSpan={2}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((p) => (
              <TableRow key={p._id}>
                <TableCell>{p.nombre}</TableCell>
                <TableCell>{p.descripcion}</TableCell>
                <TableCell>${p.precio.toLocaleString()}</TableCell>
                <TableCell>{p.categoria}</TableCell>
                <TableCell>{p.disponible ? 'Sí' : 'No'}</TableCell>
                <TableCell align="center">
                    <IconButton color="primary" onClick={() => navigate(`/editar-producto/${p._id}`)}>
                        <EditIcon />
                    </IconButton>
                </TableCell>
                <TableCell align="center">
                    <IconButton color="error" onClick={() => {
                        setProductoSeleccionado(p);
                        setOpenDialog(true);
                    }}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
            ¿Estás segura de que deseas eliminar el producto "{productoSeleccionado?.nombre}"?
        </DialogTitle>
        <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
            <Button color="error" onClick={async () => {
            try {
                await axios.delete(`http://localhost:5000/api/productos/${productoSeleccionado._id}`);
                setProductos(productos.filter(p => p._id !== productoSeleccionado._id));
                setOpenDialog(false);
            } catch (err) {
                alert('Error al eliminar producto');
            }
            }}>
            Eliminar
            </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Inventario;