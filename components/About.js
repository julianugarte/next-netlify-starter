import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.componentes} id="componentes">
      <div className="container">
        <p className={styles.label}>Cómo funciona</p>
        <h2 className={styles.title}>5 componentes que<br />activan el ecosistema</h2>
        <p className={styles.body}>Desde la conexión comercial hasta el impacto en las ciudades, cada componente construye sobre el anterior.</p>

        <div className={styles.grid}>
          {/* 01 Startup Connect */}
          <div className={styles.card}>
            <span className={styles.tag}>Componente 01</span>
            <div className={styles.cardName}>Mallplaza<br />Startup Connect</div>
            <div className={styles.cardDesc}>Programa anual de conexión entre startups y locatarios con formato speed dating comercial, reuniones uno a uno y networking ejecutivo.</div>
            <div className={styles.statRow}>
              <div><div className={styles.statNum}>10</div><div className={styles.statLabel}>Encuentros / año</div></div>
              <div><div className={styles.statNum}>10</div><div className={styles.statLabel}>Startups / encuentro</div></div>
              <div><div className={styles.statNum}>10–20</div><div className={styles.statLabel}>Locatarios / encuentro</div></div>
            </div>
            <div className={styles.chips}>
              <span className={styles.chip}>IA para retail</span>
              <span className={styles.chip}>Fidelización</span>
              <span className={styles.chip}>Omnicanalidad</span>
              <span className={`${styles.chip} ${styles.alt}`}>Logística</span>
              <span className={`${styles.chip} ${styles.alt}`}>E-commerce</span>
              <span className={`${styles.chip} ${styles.alt2}`}>Energía</span>
              <span className={`${styles.chip} ${styles.alt2}`}>Economía circular</span>
            </div>
          </div>

          {/* 04 Emprende */}
          <div className={styles.card}>
            <span className={styles.tag}>Componente 04</span>
            <div className={styles.cardName}>Mallplaza<br />Emprende</div>
            <div className={styles.cardDesc}>Impulso a emprendimientos y marcas emergentes, transformando Mallplaza en una vitrina para nuevos negocios de alto potencial.</div>
            <div className={styles.chips}>
              <span className={styles.chip}>Convocatorias abiertas</span>
              <span className={styles.chip}>Exhibición temporal</span>
              <span className={`${styles.chip} ${styles.alt}`}>Ferias temáticas</span>
              <span className={`${styles.chip} ${styles.alt}`}>Pop-up stores</span>
              <span className={`${styles.chip} ${styles.alt2}`}>Activaciones comerciales</span>
            </div>
          </div>

          {/* 02 Portafolio span2 */}
          <div className={`${styles.card} ${styles.span2}`}>
            <span className={styles.tag}>Componente 02</span>
            <div className={styles.cardName}>Portafolio curado de startups</div>
            <div className={styles.cardDesc}>Acceso permanente a startups seleccionadas por Socialab, organizadas en cuatro categorías estratégicas para el retail y las ciudades.</div>
            <div className={styles.catGrid}>
              <div className={styles.catBox}>
                <div className={styles.catTitle}>Retail Tech</div>
                <ul className={styles.catList}><li>CRM</li><li>Fidelización</li><li>Analytics</li><li>IA aplicada a ventas</li></ul>
              </div>
              <div className={styles.catBox}>
                <div className={styles.catTitle}>FoodTech</div>
                <ul className={styles.catList}><li>Gestión de merma</li><li>Delivery</li><li>Optimización operativa</li><li>Nuevas experiencias</li></ul>
              </div>
              <div className={styles.catBox}>
                <div className={styles.catTitle}>Logística</div>
                <ul className={styles.catList}><li>Última milla</li><li>Gestión de inventarios</li><li>Automatización</li></ul>
              </div>
              <div className={styles.catBox}>
                <div className={styles.catTitle}>Sostenibilidad</div>
                <ul className={styles.catList}><li>Reciclaje</li><li>Economía circular</li><li>Eficiencia hídrica</li><li>Gestión energética</li></ul>
              </div>
            </div>
          </div>

          {/* 03 Pilotos */}
          <div className={styles.card}>
            <span className={styles.tag}>Componente 03</span>
            <div className={styles.cardName}>Programa de Pilotos</div>
            <div className={styles.cardDesc}>Implementación de pilotos en centros Mallplaza, escalables posteriormente a toda la red.</div>
            <div className={styles.pilotosStrip}>
              {['Reducción de residuos','Optimización energética','Estacionamientos','Experiencia visitante','Logística urbana','Seguridad','Movilidad'].map(p => (
                <span key={p} className={styles.pilotPill}>{p}</span>
              ))}
            </div>
          </div>

          {/* 05 Ciudades */}
          <div className={styles.card}>
            <span className={styles.tag}>Componente 05</span>
            <div className={styles.cardName}>Ciudades Más<br />Inteligentes</div>
            <div className={styles.cardDesc}>Convocatoria para startups que resuelvan desafíos urbanos, con participación de municipios, universidades y organizaciones aliadas.</div>
            <div className={styles.chips}>
              <span className={styles.chip}>Movilidad</span>
              <span className={styles.chip}>Seguridad</span>
              <span className={`${styles.chip} ${styles.alt}`}>Inclusión</span>
              <span className={`${styles.chip} ${styles.alt}`}>Espacios públicos</span>
              <span className={`${styles.chip} ${styles.alt2}`}>Sustentabilidad</span>
              <span className={`${styles.chip} ${styles.alt2}`}>Economía circular</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
