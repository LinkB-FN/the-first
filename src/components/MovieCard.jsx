import { useState } from 'react'
import Button from './Button'
import './MovieCard.css'

// Horarios de ejemplo compartidos para todas las películas
const HORARIOS_DISPONIBLES = ['12:00', '14:30', '17:00', '19:30', '22:00']

function MovieCard({ title, genre, duration, rating, image, description, onVerDetalle, esFavorito, onToggleFavorito }) {
  // Estado para mostrar u ocultar la descripción de la película
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false)

  // Estado para mostrar u ocultar el panel de horarios
  const [mostrarHorarios, setMostrarHorarios] = useState(false)

  // Estado para el horario seleccionado
  const [horarioElegido, setHorarioElegido] = useState(null)

  return (
    <div className="movie-card">
      <div className="movie-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="movie-placeholder">
            <span className="placeholder-icon">Peli</span>
          </div>
        )}
        <div className="movie-rating">{rating}</div>

        {/* Botón de favorito (solo si se pasa la función) */}
        {onToggleFavorito && (
          <button
            className={`favorito-btn ${esFavorito ? 'favorito-activo' : ''}`}
            onClick={onToggleFavorito}
            title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {esFavorito ? '❤️' : '🤍'}
          </button>
        )}
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-genre">{genre}</p>
        <p className="movie-duration">⏱️ {duration}</p>

        {/* Interacción: Mostrar/Ocultar descripción con useState */}
        {description && (
          <div className="movie-description-section">
            <button
              className="toggle-desc-btn"
              onClick={() => setMostrarDescripcion(!mostrarDescripcion)}
            >
              {mostrarDescripcion ? 'Ocultar descripción ▲' : 'Ver descripción ▼'}
            </button>
            {mostrarDescripcion && (
              <p className="movie-description">{description}</p>
            )}
          </div>
        )}

        {/* Panel de horarios: se muestra al hacer click en "Ver Horarios" */}
        {mostrarHorarios && (
          <div className="horarios-panel">
            <p className="horarios-label">🕐 Selecciona un horario:</p>
            <div className="horarios-grid">
              {HORARIOS_DISPONIBLES.map(h => (
                <button
                  key={h}
                  className={`horario-btn ${horarioElegido === h ? 'horario-activo' : ''}`}
                  onClick={() => setHorarioElegido(h)}
                >
                  {h}
                </button>
              ))}
            </div>
            {horarioElegido && (
              <p className="horario-seleccionado">
                ✅ Horario seleccionado: <strong>{horarioElegido} hrs</strong>
              </p>
            )}
          </div>
        )}

        <div className="movie-actions">
          <Button
            text={mostrarHorarios ? 'Ocultar ▲' : 'Ver Horarios'}
            variant="primary"
            onClick={() => {
              setMostrarHorarios(!mostrarHorarios)
              setHorarioElegido(null)
            }}
          />
          <Button text="Más Info" variant="secondary" onClick={onVerDetalle} />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
