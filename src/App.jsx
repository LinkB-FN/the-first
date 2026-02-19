import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cartelera from './pages/Cartelera';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';

function App() {
  const [vista, setVista] = useState('cartelera');

  const cambiarVista = (nuevaVista) => {
    setVista(nuevaVista);
  };

  // Función para renderizar la vista actual
  const renderizarVista = () => {
    switch (vista) {
      case 'cartelera':
        return <Cartelera />;
      case 'alimentos':
        return <Alimentos />;
      case 'otros':
        return <Otros />;
      default:
        return <Cartelera />; // Vista por defecto
    }
  };

  return (
    <div className="app-container">
      <Header cambiarVista={cambiarVista} />
      <main>{renderizarVista()}</main>
    </div>
  );
}

export default App;