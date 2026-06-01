import styles from './Contact.module.css'

const benCols = [
  {
    icon: '🏪',
    title: 'Locatarios',
    items: ['Mayor productividad', 'Nuevas herramientas tecnológicas', 'Reducción de costos', 'Incremento de ventas'],
  },
  {
    icon: '🛍️',
    title: 'Visitantes',
    items: ['Mejor experiencia', 'Nuevos servicios', 'Mayor propuesta de valor'],
  },
  {
    icon: '🏙️',
    title: 'Mallplaza',
    items: ['Diferenciación competitiva', 'Innovación visible', 'Relación con emprendedores', 'Posicionamiento ESG', 'Impacto territorial'],
  },
]

const alcance = [
  { num: '10', label: 'Encuentros Startup Connect' },
  { num: '100', label: 'Startups evaluadas' },
  { num: '100', label: 'Locatarios participantes' },
  { num: '1.000+', label: 'Reuniones comerciales' },
  { num: '10', label: 'Pilotos implementados' },
  { num: '5', label: 'Desafíos urbanos levantados' },
  { num: '+', label: 'Activaciones en distintos centros' },
  { num: '∞', label: 'Pilotos escalables a la red' },
]

export default function Contact() {
  return (
    <>
      {/* LABORATORIO */}
      <section className={styles.laboratorio} id="laboratorio">
        <div className="container">
          <p className={styles.label}>El corazón del programa</p>
          <h2 className={styles.title}>Laboratorio de Experiencias</h2>
          <p className={styles.body}>Mallplaza no solo hospeda la innovación: la produce. Espacios físicos dentro de los centros para prototipar, probar y escalar nuevas experiencias de retail, tecnología y ciudad.</p>

          <div className={styles.labGrid}>
            <div className={styles.labVisual}>
              <div className={styles.labTag}>Un espacio vivo</div>
              <div className={styles.labQuote}>De casero de locatarios a <span className={styles.hl}>creador de experiencias</span> que definen el futuro del comercio.</div>
            </div>
            <div className={styles.labSpaces}>
              {[
                { icon: '🧪', title: 'Zonas de prototipado', desc: 'Espacios para probar conceptos de retail y experiencia con público real.' },
                { icon: '🛒', title: 'Retail del futuro', desc: 'Tiendas y formatos experimentales: cajas autónomas, probadores digitales, IA.' },
                { icon: '🎟️', title: 'Experiencias & eventos', desc: 'Activaciones inmersivas que convierten la visita en un destino en sí mismo.' },
                { icon: '📡', title: 'Showroom de soluciones', desc: 'Vitrina permanente de tecnología aplicada, abierta a locatarios y aliados.' },
              ].map(s => (
                <div key={s.title} className={styles.labSpace}>
                  <div className={styles.spaceIcon}>{s.icon}</div>
                  <div className={styles.spaceTitle}>{s.title}</div>
                  <div className={styles.spaceDesc}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.labValue}>
            <div className={styles.lvHead}>¿Qué gana Mallplaza?</div>
            <div className={styles.lvSub}>El laboratorio no es un costo: es una nueva línea de valor para el negocio Mallplaza.</div>
            <div className={styles.lvGrid}>
              {[
                { icon: '💸', title: 'Nuevos ingresos', desc: 'Espacios monetizables, fees de pilotos y formatos de arriendo flexibles para marcas y startups.' },
                { icon: '📊', title: 'Data & insights', desc: 'Comportamiento real de visitantes que alimenta decisiones comerciales y de mix de locatarios.' },
                { icon: '✨', title: 'Marca & tráfico', desc: 'Contenido e innovación visible que atrae visitas, prensa y posicionamiento diferenciador.' },
                { icon: '🌱', title: 'Liderazgo ESG', desc: 'Impacto territorial medible y agenda de sostenibilidad aplicada a las ciudades.' },
              ].map(v => (
                <div key={v.title} className={styles.lvc}>
                  <div className={styles.lvcIcon}>{v.icon}</div>
                  <div className={styles.lvcTitle}>{v.title}</div>
                  <div className={styles.lvcDesc}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className={styles.beneficios} id="beneficios">
        <div className="container">
          <p className={styles.label}>Valor compartido</p>
          <h2 className={styles.title}>Todos ganan en<br />el ecosistema</h2>
          <p className={styles.body}>Mallplaza Impulsa genera beneficios concretos para cada actor de la cadena.</p>
          <div className={styles.benCols}>
            {benCols.map((col, i) => (
              <div key={col.title} className={styles.benCol}>
                <div className={`${styles.benIcon} ${styles[`benIcon${i}`]}`}>{col.icon}</div>
                <div className={styles.benTitle}>{col.title}</div>
                <ul className={styles.benList}>
                  {col.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALCANCE */}
      <section className={styles.alcance} id="alcance">
        <div className="container">
          <p className={`${styles.label} ${styles.center}`}>Resultados esperados</p>
          <h2 className={`${styles.title} ${styles.center}`}>Alcance anual del programa</h2>
          <p className={`${styles.body} ${styles.bodyCenter}`}>Métricas concretas que el ecosistema Mallplaza Impulsa moviliza cada año.</p>
          <div className={styles.alcGrid}>
            {alcance.map(a => (
              <div key={a.label} className={styles.alcCard}>
                <div className={styles.alcNum}>{a.num}</div>
                <div className={styles.alcLabel}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className={styles.vision}>
        <div className="container">
          <p className={`${styles.label} ${styles.labelLight}`}>Visión</p>
          <p className={styles.visionQuote}>
            Convertir a Mallplaza en la principal plataforma de conexión entre comercio, emprendimiento e innovación urbana de Latinoamérica.
          </p>
          <a href="mailto:contacto@socialab.com" className={styles.visionCta}>Conversemos sobre Mallplaza Impulsa →</a>
        </div>
      </section>
    </>
  )
}
