import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import '../styles/MovieCard.css';

const HORARIOS_DISPONIBLES = ['12:00', '14:30', '17:00', '19:30', '22:00']

function MovieCard({ id, title, genre, duration, rating, image, description, esFavorito, onToggleFavorito }) {
  const navigate = useNavigate()
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false)
  const [mostrarHorarios, setMostrarHorarios] = useState(false)
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
          <Button text="Más Info" variant="secondary" onClick={() => navigate(`/pelicula/${id}`)} />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
