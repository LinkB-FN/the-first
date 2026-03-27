import { useState } from "react"
import { useParams } from 'react-router-dom'
import '../styles/Detalle.css';
import peliculas from '../data/peliculas.js';

const HORARIOS = ['12:00', '14:30', '17:00', '19:30', '22:00']

function Detalle() {
  const { id } = useParams()
  const pelicula = peliculas.find(p => p.id === parseInt(id))


  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("")
  const [mensaje, setMensaje] = useState("")

  if (!pelicula) {
    return (
      <main className="detalle-vacio">
        <span className="detalle-vacio-icon">🎬</span>
        <h2>No hay película seleccionada</h2>
        <p>Regresa a la cartelera y elige una película.</p>
      </main>
    )
  }

  const PRECIO_BOLETO = 95
  const subtotal = cantidadBoletos * PRECIO_BOLETO

  function manejarCompra(e) {
    e.preventDefault()
    setMensaje(
      `¡Listo, ${nombre}! Compraste ${cantidadBoletos} boleto(s) para "${pelicula.titulo}" a las ${horarioSeleccionado}. Total: $${subtotal}.00 MXN`
    )
    setNombre("")
    setCantidadBoletos(1)
    setHorarioSeleccionado("")
  }

  return (
    <main className="detalle-page">

      {/* ── Hero: imagen + info superpuesta ── */}
      <section className="detalle-hero">
        <img
          src={pelicula.imagen}
          alt={pelicula.titulo}
          className="detalle-hero-img"
        />
        <div className="detalle-hero-overlay">
          <h1 className="detalle-titulo">{pelicula.titulo}</h1>
          <div className="detalle-badges">
            {pelicula.genero && (
              <span className="badge badge-genero">{pelicula.genero}</span>
            )}
            {pelicula.duracion && (
              <span className="badge badge-duracion">⏱ {pelicula.duracion}</span>
            )}
            {pelicula.calificacion && (
              <span className="badge badge-rating">⭐ {pelicula.calificacion}</span>
            )}
          </div>
        </div>
      </section>

      {/* ── Descripción ── */}
      <section className="detalle-descripcion">
        <h2 className="detalle-seccion-titulo">Sinopsis</h2>
        <p className="detalle-sinopsis">{pelicula.descripcion}</p>
      </section>

      {/* ── Formulario de compra ── */}
      <section className="detalle-compra">
        <h2 className="detalle-seccion-titulo">🎟️ Comprar Boletos</h2>

        <form className="compra-form" onSubmit={manejarCompra}>

          {/* Nombre */}
          <div className="compra-field">
            <label htmlFor="compra-nombre">Nombre completo</label>
            <input
              id="compra-nombre"
              type="text"
              placeholder="Ej. Carlos Ramírez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          {/* Cantidad de boletos */}
          <div className="compra-field">
            <label htmlFor="compra-cantidad">Cantidad de boletos</label>
            <input
              id="compra-cantidad"
              type="number"
              min="1"
              max="10"
              value={cantidadBoletos}
              onChange={(e) => setCantidadBoletos(Number(e.target.value))}
              required
            />
          </div>

          {/* Selección de horario (onChange) */}
          <div className="compra-field">
            <label htmlFor="compra-horario">Selecciona un horario</label>
            <select
              id="compra-horario"
              value={horarioSeleccionado}
              onChange={(e) => setHorarioSeleccionado(e.target.value)}
              required
            >
              <option value="">-- Elige un horario --</option>
              {HORARIOS.map(h => (
                <option key={h} value={h}>{h} hrs</option>
              ))}
            </select>
          </div>

          {/* Resumen de precio */}
          <div className="compra-resumen">
            <span>Precio por boleto: <strong>$95.00 MXN</strong></span>
            <span className="compra-total">Total: <strong>${subtotal}.00 MXN</strong></span>
          </div>

          <button type="submit" className="compra-btn">
            Confirmar Compra 🎬
          </button>
        </form>

        {/* Confirmación de compra */}
        {mensaje && (
          <div className="compra-confirmacion">
            <span className="compra-confirmacion-icon">✅</span>
            <p>{mensaje}</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Detalle
