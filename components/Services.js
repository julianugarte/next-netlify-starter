import styles from './Services.module.css'

const services = [
  {
    icon: '🚀',
    title: 'Aceleración de Startups',
    desc: 'Programa intensivo para emprendimientos de impacto social. Acompañamiento, mentoría y acceso a red de inversores que valoran el triple resultado.',
  },
  {
    icon: '🎯',
    title: 'Consultoría de Innovación',
    desc: 'Diseñamos estrategias de innovación centradas en el usuario para organizaciones públicas y privadas que buscan generar valor social y económico.',
  },
  {
    icon: '🏫',
    title: 'Educación y Talleres',
    desc: 'Programas formativos en Design Thinking, innovación social y emprendimiento. Capacitaciones in-house y certificaciones para equipos de trabajo.',
  },
  {
    icon: '🌐',
    title: 'Comunidad y Red',
    desc: 'Conectamos a más de 50.000 innovadores sociales en toda la región. Accede a eventos, colaboraciones y oportunidades exclusivas de nuestra red.',
  },
  {
    icon: '💡',
    title: 'Desafíos de Innovación',
    desc: 'Organizamos convocatorias abiertas y retos de co-creación para que los mejores talentos resuelvan problemáticas sociales reales en alianza con corporativos y gobierno.',
  },
  {
    icon: '📊',
    title: 'Medición de Impacto',
    desc: 'Desarrollamos marcos de medición y evaluación de impacto social para que tu organización demuestre, comunique y amplíe sus resultados con evidencia.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Nuestros Servicios</span>
          <h2 className={styles.title}>Todo lo que necesitas para innovar con impacto</h2>
          <p className={styles.subtitle}>
            Ofrecemos una suite completa de servicios diseñados para impulsar la innovación social en organizaciones de todos los tamaños.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.iconWrap}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <a href="#contacto" className={styles.cardLink}>
                Saber más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
