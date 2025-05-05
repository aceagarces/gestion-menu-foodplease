import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventario from './pages/Inventario';
import AgregarProducto from './pages/AgregarProducto';
import EditarProducto from './pages/EditarProducto';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/agregar-producto" element={<AgregarProducto />} /> 
        <Route path="/editar-producto/:id" element={<EditarProducto />} />
      </Routes>
    </Router>
  );
}

export default App;