import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import './Alimentos.css';

function Alimentos() {
  // Estado del carrito de alimentos
  const [carrito, setCarrito] = useState([])

  const foodItems = {
    bebidas: [
      { id: 'b1', name: 'Refresco Grande', description: 'Refresco de tu sabor favorito.', price: '$55.00', category: 'Bebida', image: '' },
      { id: 'b2', name: 'ICEE', description: 'Bebida helada de frambuesa o cereza.', price: '$60.00', category: 'Bebida', image: '' },
      { id: 'b3', name: 'Agua Embotellada', description: 'Agua purificada sin gas.', price: '$35.00', category: 'Bebida', image: '' },
    ],
    comestibles: [
      { id: 'c1', name: 'Palomitas Mantequilla', description: 'Clásicas palomitas con extra mantequilla.', price: '$80.00', category: 'Comestible', image: '' },
      { id: 'c2', name: 'Nachos con Queso', description: 'Totopos de maíz con queso cheddar tibio.', price: '$75.00', category: 'Comestible', image: '' },
      { id: 'c3', name: 'Hot Dog', description: 'Salchicha de pavo en pan suave, con tus aderezos favoritos.', price: '$70.00', category: 'Comestible', image: '' },
    ],
    dulces: [
      { id: 'd1', name: 'M&Ms de Chocolate', description: 'Bolsa de chocolates confitados.', price: '$45.00', category: 'Dulce', image: '' },
      { id: 'd2', name: 'Gomitas', description: 'Mezcla de gomitas ácidas y dulces.', price: '$40.00', category: 'Dulce', image: '' },
      { id: 'd3', name: 'Skittles', description: 'Caramelos masticables con sabores de frutas.', price: '$42.00', category: 'Dulce', image: '' },
    ],
  };

  const categories = {
    'Bebidas': foodItems.bebidas,
    'Comestibles': foodItems.comestibles,
    'Dulces y Snacks': foodItems.dulces,
  };

  // Agrega un item al carrito o incrementa su cantidad (onClick via onAgregar)
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

  // Calcula el total del carrito
  const totalItems = carrito.reduce((acc, i) => acc + i.cantidad, 0)
  const totalPrecio = carrito.reduce((acc, i) => {
    const precio = parseFloat(i.price.replace('$', ''))
    return acc + precio * i.cantidad
  }, 0)

  return (
    <div className="alimentos-page">

      {/* Resumen del carrito: se muestra cuando hay al menos un item */}
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
