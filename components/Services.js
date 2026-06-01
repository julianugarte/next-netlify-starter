import styles from './Services.module.css'

const objetivos = [
  { num: '01', text: 'Fortalecer la competitividad de los locatarios Mallplaza' },
  { num: '02', text: 'Acercar tecnologías y soluciones innovadoras a comercios y operadores' },
  { num: '03', text: 'Impulsar sostenibilidad y eficiencia dentro del ecosistema' },
  { num: '04', text: 'Generar nuevas oportunidades de negocio para startups' },
  { num: '05', text: 'Posicionar a Mallplaza como referente regional en innovación aplicada' },
]

export default function Services() {
  return (
    <>
      {/* INTRO */}
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <p className={styles.label}>Resumen ejecutivo</p>
            <h2 className={styles.title}>De centro comercial<br />a plataforma urbana</h2>
            <p className={styles.body}>
              Mallplaza ha evolucionado hacia una plataforma que conecta personas, comercio, servicios, experiencias y comunidad. <strong>Mallplaza Impulsa</strong> es la capa de innovación que transforma esos espacios en lugares donde la tecnología genera valor concreto para locatarios, visitantes y ciudades.
            </p>
          </div>
          <div className={styles.introCard}>
            <p className={styles.label}>La evolución</p>
            <div className={styles.evolution}>
              <div className={styles.evoPill}>Centro comercial</div>
              <div className={styles.evoArrow}>→</div>
              <div className={styles.evoPill}>Plataforma urbana</div>
              <div className={styles.evoArrow}>→</div>
              <div className={`${styles.evoPill} ${styles.active}`}>Ecosistema de innovación</div>
            </div>
            <p className={styles.introNote}>
              Socialab aporta la red de startups, la metodología de innovación abierta y la operación de programas; Mallplaza aporta la escala, los espacios y el acceso a comercio y comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className={styles.objetivos} id="objetivos">
        <div className="container">
          <p className={styles.label}>Hacia dónde vamos</p>
          <h2 className={styles.title}>5 objetivos del programa</h2>
          <p className={styles.body}>Cada acción de Mallplaza Impulsa persigue resultados medibles para el ecosistema completo.</p>
          <div className={styles.objGrid}>
            {objetivos.map((o) => (
              <div key={o.num} className={styles.objCard}>
                <div className={styles.objNum}>{o.num}</div>
                <div className={styles.objText}>{o.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
