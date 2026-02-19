import MovieCard from '../components/MovieCard'
import Button from '../components/Button'
import './Cartelera.css'
import devImage from '../assets/image/Dev.png'
import imageImage from '../assets/image/image.png'

function Cartelera({ cambiarVista }) {
  // Datos de ejemplo de películas
  const movies = [
    {
      id: 1,
      title: "gyaaat",
      genre: "Ciencia Ficcion, Aventura",
      duration: "166 min",
      rating: "⭐ 8.5",
      image: devImage
    },
    {
      id: 2,
      title: "Smash",
      genre: "Drama, Historia",
      duration: "180 min",
      rating: "⭐ 8.8",
      image: imageImage
    },
    {
      id: 3,
      title: "Fortnite",
      genre: "Comedia, Fantasía",
      duration: "114 min",
      rating: "⭐ 7.9"
    },
    {
      id: 4,
      title: "Send me 30k",
      genre: "Acción, Aventura",
      duration: "150 min",
      rating: "⭐ 8.2"
    },
    {
      id: 5,
      title: "67 minutos",
      genre: "Animación, Acción",
      duration: "140 min",
      rating: "⭐ 8.9"
    },
    {
      id: 6,
      title: "The Skibidi",
      genre: "Acción, Crimen",
      duration: "176 min",
      rating: "⭐ 8.3"
    }
  ]

  return (
    <div className="cartelera-page">
      <section className="movies-section">
        <h2 className="section-title">Cartelera Actual</h2>
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              genre={movie.genre}
              duration={movie.duration}
              rating={movie.rating}
              image={movie.image}
              onVerDetalle={() => cambiarVista('detalle')}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Cartelera
