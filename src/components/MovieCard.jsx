import Button from './Button'
import './MovieCard.css'

function MovieCard({ title, genre, duration, rating, image, onVerDetalle}) {
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
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-genre">{genre}</p>
        <p className="movie-duration">⏱️ {duration}</p>
        <div className="movie-actions">
          <Button text="Ver Horarios" variant="primary" />
          <Button text="Más Info" variant="secondary" onClick={onVerDetalle} />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
