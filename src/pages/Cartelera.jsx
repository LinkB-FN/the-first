import { useState } from "react"
import MovieCard from "../components/MovieCard"
import peliculas from "../detalles.js";
import './Cartelera.css';

function Cartelera() {

  // Estado para guardar los IDs de películas favoritas
  const [favoritos, setFavoritos] = useState([])

  // Filtramos las películas que están en cartelera
  const peliculasCartelera = peliculas.filter(p => p.enCartelera);

  // Películas marcadas como favoritas
  const peliculasFavoritas = peliculasCartelera.filter(p => favoritos.includes(p.id));

  // Función para agregar o quitar de favoritos (onClick)
  function toggleFavorito(id) {
    setFavoritos(prev =>
      prev.includes(id)
        ? prev.filter(f => f !== id)   // quitar si ya existe
        : [...prev, id]                 // agregar si no existe
    )
  }

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>

      {/* Sección de favoritos: se muestra solo cuando hay al menos uno */}
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
