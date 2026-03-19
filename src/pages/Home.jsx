import MovieCard from "../components/MovieCard";
import MovieCarousel from "../components/MovieCarousel";
import peliculas from "../detalles.js";

function Home() {

  return (
    <>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px"
        }}
      >
        <h2>ESTRENOS</h2>
        <MovieCarousel movies={peliculas} />
      </section>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          padding: "16px"
        }}
      >
        {peliculas.filter(p => p.enCartelera).map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            id={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.imagen}
          />
        ))}
      </main>
    </>
  );
}

export default Home;