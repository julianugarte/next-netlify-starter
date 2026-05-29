import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <span className="section-label">Contacto</span>
            <h2 className={styles.title}>Hablemos sobre tu próximo proyecto</h2>
            <p className={styles.body}>
              Cuéntanos tu desafío y te mostraremos cómo Socialab puede acompañarte en el camino hacia un mayor impacto.
            </p>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📧</div>
                <div className={styles.contactText}>
                  <strong>Email</strong>
                  <span>hola@socialab.com</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactText}>
                  <strong>Ubicación</strong>
                  <span>Santiago, Chile · Presencia en toda LATAM</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕐</div>
                <div className={styles.contactText}>
                  <strong>Horario</strong>
                  <span>Lunes a viernes, 9:00 – 18:00 CLT</span>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" placeholder="Tu nombre" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="tu@email.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="organizacion">Organización</label>
              <input id="organizacion" type="text" placeholder="Empresa u organización" />
            </div>
            <div className={styles.field}>
              <label htmlFor="servicio">Servicio de interés</label>
              <select id="servicio">
                <option value="">Selecciona un servicio</option>
                <option>Aceleración de Startups</option>
                <option>Consultoría de Innovación</option>
                <option>Educación y Talleres</option>
                <option>Desafíos de Innovación</option>
                <option>Medición de Impacto</option>
                <option>Otro</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" rows={4} placeholder="Cuéntanos sobre tu proyecto o necesidad..." />
            </div>
            <button type="submit" className={styles.submit}>
              Enviar mensaje →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
