import { useState, useEffect } from 'react';
import '../styles/Otros.css';
import InfoCard from '../components/InfoCard';
import { otrosItems } from '../data/promociones.js';

function Otros() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [confirmacion, setConfirmacion] = useState('')

  const [noticias, setNoticias] = useState([])
  const [cargandoNoticias, setCargandoNoticias] = useState(true)
  const [errorNoticias, setErrorNoticias] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar')
        return res.json()
      })
      .then(data => {
        setNoticias(data)
        setCargandoNoticias(false)
      })
      .catch(() => {
        setErrorNoticias(true)
        setCargandoNoticias(false)
      })
  }, [])

  function manejarRegistro(e) {
    e.preventDefault()
    setConfirmacion(`✅ ¡Gracias, ${nombre}! Te registramos con el correo ${email}. Pronto recibirás nuestras promociones.`)
    setNombre('')
    setEmail('')
  }

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

      <section className="registro-section">
        <h2 className="section-title">📧 Regístrate para Promociones</h2>
        <p className="registro-subtitulo">Recibe ofertas exclusivas, estrenos y preventas directo en tu correo.</p>

        <form className="registro-form" onSubmit={manejarRegistro}>
          <div className="form-group">
            <label htmlFor="reg-nombre">Nombre completo</label>
            <input
              id="reg-nombre"
              type="text"
              placeholder="Ej. Ana García"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-email">Correo electrónico</label>
            <input
              id="reg-email"
              type="email"
              placeholder="Ej. ana@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="registro-btn">
            Registrarme 🎬
          </button>
        </form>

        {confirmacion && (
          <div className="registro-confirmacion">
            {confirmacion}
          </div>
        )}
      </section>

      <section className="noticias-section">
        <h2 className="section-title">📰 Noticias del Cine</h2>

        {cargandoNoticias && (
          <p className="noticias-cargando">Cargando noticias...</p>
        )}

        {errorNoticias && (
          <p className="noticias-error">No se pudieron cargar las noticias. Intenta más tarde.</p>
        )}

        {!cargandoNoticias && !errorNoticias && (
          <div className="noticias-grid">
            {noticias.map(noticia => (
              <article key={noticia.id} className="noticia-card">
                <span className="noticia-id">#{noticia.id}</span>
                <h4 className="noticia-titulo">{noticia.title}</h4>
                <p className="noticia-cuerpo">{noticia.body}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Otros;
