import { useState } from 'react';
import Button from './Button';
import '../styles/FoodCard.css';

function FoodCard({ name, description, price, image, category, onAgregar }) {
  const [agregado, setAgregado] = useState(false)

  function handleAgregar() {
    if (onAgregar) onAgregar()
    setAgregado(true)
    setTimeout(() => setAgregado(false), 1500)
  }

  return (
    <div className={`food-card ${agregado ? 'food-card-agregado' : ''}`}>
      <div className="food-image-container">
        {image ? (
          <img src={image} alt={name} className="food-image" />
        ) : (
          <div className="food-placeholder">
            <span>{category}</span>
          </div>
        )}
      </div>
      <div className="food-info">
        <h4 className="food-name">{name}</h4>
        <p className="food-description">{description}</p>
        <div className="food-footer">
          <span className="food-price">{price}</span>
          <Button
            text={agregado ? '✓ Agregado' : 'Agregar'}
            variant={agregado ? 'primary' : 'secondary'}
            onClick={handleAgregar}
          />
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
