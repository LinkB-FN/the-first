export const foodItems = {
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

export const categories = {
  'Bebidas': foodItems.bebidas,
  'Comestibles': foodItems.comestibles,
  'Dulces y Snacks': foodItems.dulces,
};
