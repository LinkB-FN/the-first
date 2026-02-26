import React, { useState, useEffect } from 'react';
import './Otros.css';
import InfoCard from '../components/InfoCard';

function Otros() {
  // ── Estados del formulario de registro (onChange + onSubmit) ──
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [confirmacion, setConfirmacion] = useState('')

  // ── Estado para noticias cargadas dinámicamente (useEffect + fetch) ──
  const [noticias, setNoticias] = useState([])
  const [cargandoNoticias, setCargandoNoticias] = useState(true)
  const [errorNoticias, setErrorNoticias] = useState(false)

  // useEffect: carga noticias desde API pública al montar el componente
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

  // Maneja el envío del formulario (onSubmit)
  function manejarRegistro(e) {
    e.preventDefault()
    setConfirmacion(`✅ ¡Gracias, ${nombre}! Te registramos con el correo ${email}. Pronto recibirás nuestras promociones.`)
    setNombre('')
    setEmail('')
  }

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

      {/* Tarjetas de servicios */}
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

      {/* ── Formulario controlado: Registro de Promociones ── */}
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

        {/* Mensaje de confirmación tras enviar el formulario */}
        {confirmacion && (
          <div className="registro-confirmacion">
            {confirmacion}
          </div>
        )}
      </section>

      {/* ── Noticias dinámicas cargadas con useEffect + fetch ── */}
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
