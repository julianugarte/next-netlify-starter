import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo}>
          <div className={styles.logoIcon}>S</div>
          Socialab
        </a>
        <ul className={styles.nav}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto" className={styles.cta}>Contáctanos</a></li>
        </ul>
        <button className={styles.hamburger} aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
