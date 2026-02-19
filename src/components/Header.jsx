import './Header.css'

function Header({ cambiarVista }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title" onClick={() => cambiarVista('cartelera')} style={{ cursor: 'pointer' }}>
          F FortFlix
        </h1>
        <nav className="header-nav">
          <a onClick={() => cambiarVista('cartelera')} className="nav-link">Cartelera</a>
          <a onClick={() => cambiarVista('alimentos')} className="nav-link">Alimentos</a>
          <a onClick={() => cambiarVista('otros')} className="nav-link">Otros</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
