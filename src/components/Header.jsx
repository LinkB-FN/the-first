import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-title-link">
          <h1 className="header-title">F FortFlix</h1>
        </Link>
        <nav className="header-nav">
          <NavLink to="/cartelera" className="nav-link">Cartelera</NavLink>
          <NavLink to="/alimentos" className="nav-link">Alimentos</NavLink>
          <NavLink to="/otros" className="nav-link">Otros</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
