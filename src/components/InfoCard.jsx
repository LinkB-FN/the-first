import React from 'react';
import './InfoCard.css';

function InfoCard({ title, description, ctaText, ctaLink = '#' }) {
  return (
    <div className="info-card">
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
      <a href={ctaLink} className="info-card-cta">{ctaText} &rarr;</a>
    </div>
  );
}

export default InfoCard;