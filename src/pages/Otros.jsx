import React from 'react';
import './Otros.css';
import InfoCard from '../components/InfoCard';

function Otros() {
  const otrosItems = [
    {
      id: 'promo1',
      title: 'Promociones',
      description: '¡Martes 2x1! Compra un boleto y llévate el segundo gratis en todas nuestras salas. No aplica en formatos especiales.',
      cta: 'Ver más promociones'
    },
    {
      id: 'membresia1',
      title: 'Membresías FortFlix',
      description: 'Únete a nuestro club de lealtad y obtén beneficios exclusivos, como puntos por cada compra, descuentos en dulcería y boletos gratis.',
      cta: 'Conoce los niveles'
    },
    {
      id: 'preventa1',
      title: 'Preventas Exclusivas',
      description: 'Asegura tu lugar para los estrenos más esperados. Compra tus boletos antes que nadie y evita las filas.',
      cta: 'Comprar ahora'
    },
    {
      id: 'formatos1',
      title: 'Formatos Especiales',
      description: 'Vive el cine como nunca antes en nuestras salas IMAX, 4DX y VIP. Experiencias inmersivas con la mejor tecnología de audio y video.',
      cta: 'Descubre los formatos',
    },
    {
      id: 'regalo1',
      title: 'Tarjeta de Regalo',
      description: 'El regalo perfecto para cualquier amante del cine. Cárgala con el monto que desees y úsala para boletos o en dulcería.',
      cta: 'Comprar tarjeta',
    },
    {
      id: 'corporativo1',
      title: 'Ventas Corporativas',
      description: 'Organiza funciones privadas para tu empresa, eventos especiales o regala boletos a tus colaboradores. Planes a la medida.',
      cta: 'Contactar a un asesor',
    }
  ];

  return (
    <div className="otros-page">
      <h2 className="section-title">Más en FortFlix</h2>
      <div className="otros-container">
        {otrosItems.map(item => (
          <InfoCard
            key={item.id}
            title={item.title}
            description={item.description}
            ctaText={item.cta}
          />
        ))}
      </div>
    </div>
  );
}

export default Otros;