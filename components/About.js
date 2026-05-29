import styles from './About.module.css'

const values = [
  {
    icon: '🤝',
    title: 'Colaboración',
    desc: 'Creemos que los grandes cambios nacen del trabajo conjunto entre personas, organizaciones y comunidades.',
  },
  {
    icon: '🌱',
    title: 'Sostenibilidad',
    desc: 'Diseñamos soluciones que generan valor duradero, respetando el medio ambiente y las futuras generaciones.',
  },
  {
    icon: '⚡',
    title: 'Innovación',
    desc: 'Utilizamos metodologías ágiles y centradas en el usuario para resolver problemas complejos de forma creativa.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.imageWrap}>
            <div className={styles.imagePlaceholder}>🌎</div>
            <div className={styles.floatCard}>
              <div className={styles.floatIcon}>🏆</div>
              <div className={styles.floatText}>
                <strong>#1</strong>
                <span>Plataforma de innovación social en LATAM</span>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <span className="section-label">Quiénes somos</span>
            <h2 className={styles.title}>Una comunidad de cambio global desde América Latina</h2>
            <p className={styles.body}>
              Socialab nació con la convicción de que la innovación puede ser una fuerza transformadora para construir sociedades más justas. Desde 2013, hemos acompañado a miles de emprendedores, organizaciones y gobiernos en el diseño e implementación de soluciones a los desafíos más urgentes de nuestra región.
            </p>
            <p className={styles.body}>
              Operamos en más de 18 países y contamos con un ecosistema vibrante de innovadores, mentores, corporativos y fondos de inversión de impacto.
            </p>
            <div className={styles.values}>
              {values.map((v) => (
                <div key={v.title} className={styles.value}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <div className={styles.valueText}>
                    <strong>{v.title}</strong>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
