import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cartelera from './pages/Cartelera';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';
import Footer from './components/Footer';
import Politicas from './pages/Politicas';
import Contacto from './pages/Contacto';
import Terminos from './pages/Terminos';

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/otros" element={<Otros />} />
          {/* Ruta dinámica para detalles de películas */}
          <Route path="/pelicula/:id" element={<Detalle />} />

          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/terminos" element={<Terminos />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App