import { Routes, Route } from 'react-router-dom';
import Cartelera from '../pages/Cartelera';
import Home from '../pages/Home';
import Detalle from '../pages/Detalle';
import Alimentos from '../pages/Alimentos';
import Otros from '../pages/Otros';
import Politicas from '../pages/Politicas';
import Contacto from '../pages/Contacto';
import Terminos from '../pages/Terminos';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/otros" element={<Otros />} />
      <Route path="/pelicula/:id" element={<Detalle />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/politicas" element={<Politicas />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
  );
};
