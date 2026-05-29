import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Innovación con propósito social
          </div>
          <h1 className={styles.title}>
            Transformamos desafíos sociales en{' '}
            <span>soluciones de impacto</span>
          </h1>
          <p className={styles.subtitle}>
            Somos la plataforma líder en innovación social en América Latina. Conectamos personas, organizaciones y tecnología para construir un futuro más equitativo y sostenible.
          </p>
          <div className={styles.actions}>
            <a href="#servicios" className={styles.btnPrimary}>
              Ver servicios →
            </a>
            <a href="#contacto" className={styles.btnSecondary}>
              Hablar con un experto
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>+2<span>K</span></div>
              <div className={styles.statLabel}>Proyectos impulsados</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>18<span>+</span></div>
              <div className={styles.statLabel}>Países en la región</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500<span>K</span></div>
              <div className={styles.statLabel}>Personas beneficiadas</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10<span>+</span></div>
              <div className={styles.statLabel}>Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
