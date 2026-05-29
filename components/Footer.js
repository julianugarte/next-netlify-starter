import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>S</div>
            Socialab
          </div>
          <p className={styles.tagline}>
            Innovación social para un mundo más justo y sostenible.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.col}>
            <strong>Servicios</strong>
            <a href="#servicios">Aceleración</a>
            <a href="#servicios">Consultoría</a>
            <a href="#servicios">Educación</a>
            <a href="#servicios">Medición de Impacto</a>
          </div>
          <div className={styles.col}>
            <strong>Empresa</strong>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <span>© {new Date().getFullYear()} Socialab. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
