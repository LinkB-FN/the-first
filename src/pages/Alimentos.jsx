import { useState } from 'react';
import FoodCard from '../components/FoodCard';
import '../styles/Alimentos.css';
import { categories } from '../data/alimentos.js';

function Alimentos() {
  const [carrito, setCarrito] = useState([])

  function agregarAlCarrito(item) {
    setCarrito(prev => {
      const existe = prev.find(i => i.id === item.id)
      if (existe) {
        return prev.map(i =>
          i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
        )
      }
      return [...prev, { ...item, cantidad: 1 }]
    })
  }

  const totalItems = carrito.reduce((acc, i) => acc + i.cantidad, 0)
  const totalPrecio = carrito.reduce((acc, i) => {
    const precio = parseFloat(i.price.replace('$', ''))
    return acc + precio * i.cantidad
  }, 0)

  return (
    <div className="alimentos-page">

      {carrito.length > 0 && (
        <section className="carrito-resumen">
          <h2 className="carrito-titulo">🛒 Mi Pedido ({totalItems} artículo{totalItems !== 1 ? 's' : ''})</h2>
          <ul className="carrito-lista">
            {carrito.map(item => (
              <li key={item.id} className="carrito-item">
                <span className="carrito-nombre">{item.name}</span>
                <span className="carrito-cantidad">x{item.cantidad}</span>
                <span className="carrito-subtotal">
                  ${(parseFloat(item.price.replace('$', '')) * item.cantidad).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="carrito-total">
            Total: <strong>${totalPrecio.toFixed(2)}</strong>
          </div>
        </section>
      )}

      {Object.entries(categories).map(([categoryName, items]) => (
        <section className="food-section" key={categoryName}>
          <h2 className="section-title">{categoryName}</h2>
          <div className="food-grid">
            {items.map(item => (
              <FoodCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
                onAgregar={() => agregarAlCarrito(item)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Alimentos;
