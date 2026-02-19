import React from 'react';
import Button from './Button';
import './FoodCard.css';

function FoodCard({ name, description, price, image, category }) {
  return (
    <div className="food-card">
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
          <Button text="Agregar" variant="secondary" />
        </div>
      </div>
    </div>
  );
}

export default FoodCard;