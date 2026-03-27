import { useState } from "react"
import MovieCard from "../components/MovieCard"
import peliculas from "../data/peliculas.js";
import '../styles/Cartelera.css';

function Cartelera() {
  const [favoritos, setFavoritos] = useState([])

  const peliculasCartelera = peliculas.filter(p => p.enCartelera);
  const peliculasFavoritas = peliculasCartelera.filter(p => favoritos.includes(p.id));

  function toggleFavorito(id) {
    setFavoritos(prev =>
      prev.includes(id)
        ? prev.filter(f => f !== id)
        : [...prev, id]
    )
  }

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>

      {peliculasFavoritas.length > 0 && (
        <section className="favoritos-section">
          <h2 className="favoritos-titulo">❤️ Mis Favoritas ({peliculasFavoritas.length})</h2>
          <div className="favoritos-lista">
            {peliculasFavoritas.map(p => (
              <span key={p.id} className="favorito-tag">
                {p.titulo}
              </span>
            ))}
          </div>
        </section>
      )}

      <h2 className="section-title">Cartelera</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px"
        }}
      >
        {peliculasCartelera.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            id={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.imagen}
            genre={pelicula.genero}
            duration={pelicula.duracion}
            rating={pelicula.calificacion}
            description={pelicula.descripcion}
            esFavorito={favoritos.includes(pelicula.id)}
            onToggleFavorito={() => toggleFavorito(pelicula.id)}
          />
        ))}
      </div>
    </main>
  )
}

export default Cartelera
