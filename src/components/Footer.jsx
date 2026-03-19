import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.content}>
        {/* Sección: Legales y Políticas */}
        <div style={styles.column}>
          <h4 style={styles.title}>Políticas y Legales</h4>
          <ul style={styles.list}>
            <li>
              <Link to="/politicas" style={{ ...styles.listItem, textDecoration: 'none', display: 'block' }}>
                Políticas de Privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos" style={{ ...styles.listItem, textDecoration: 'none', display: 'block' }}>
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>

        {/* Sección: Contacto */}
        <div style={styles.column}>
          <h4 style={styles.title}>Contacto</h4>
          <ul style={styles.list}>
            <li>
              <Link to="/contacto" style={{ ...styles.listItem, textDecoration: 'none', display: 'block' }}>
                Atención a clientes
              </Link>
            </li>
            <li style={{ ...styles.listItem, cursor: 'default' }}>T. 552 122 6060</li>
            <li style={{ ...styles.listItem, cursor: 'default' }}>aac@cinepolis.com</li>
          </ul>
        </div>

        {/* Sección: Redes Sociales */}
        <div style={styles.column}>
          <h4 style={styles.title}>Síguenos</h4>
          <div style={styles.socialContainer}>
            <span style={styles.socialIcon}>f</span>
            <span style={styles.socialIcon}>X</span>
            <span style={styles.socialIcon}>in</span>
            <span style={styles.socialIcon}>IG</span>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p>&copy; 2024 Sitio desarrollado para actividad académica. v0.1.0</p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '40px 20px 10px',
    fontFamily: 'sans-serif',
    marginTop: 'auto',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingBottom: '30px',
    borderBottom: '1px solid #334155'
  },
  column: {
    margin: '10px 20px',
    minWidth: '200px'
  },
  title: {
    fontSize: '18px',
    marginBottom: '15px',
    fontWeight: 'bold'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    marginBottom: '10px',
    fontSize: '14px',
    color: '#cbd5e1',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  socialContainer: {
    display: 'flex',
    gap: '15px'
  },
  socialIcon: {
    cursor: 'pointer',
    fontSize: '16px',
    color: '#cbd5e1',
    fontWeight: 'bold'
  },
  bottomBar: {
    textAlign: 'center',
    paddingTop: '20px',
    fontSize: '12px',
    color: '#94a3b8'
  }
};

export default Footer;
