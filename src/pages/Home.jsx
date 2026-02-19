import './Home.css'
import MovieCard from '../components/MovieCard'

function Home({cambiarVista}) {
  return (
    <div className="home-page">
      <h2>Bienvenido a FortFlix</h2>
      <p>Página de inicio - Próximamente</p>
      <MovieCard 
      title="Smash" genre="Drama, Historia" duration="180 min" rating="⭐ 8.8" image="" onVerDetalle={() => cambiarVista("detalle")}/>
    </div>
  )
}

export default Home
