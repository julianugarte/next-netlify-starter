import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.rings}>
        <div className={`${styles.ring} ${styles.r1}`} />
        <div className={`${styles.ring} ${styles.r2}`} />
        <div className={`${styles.ring} ${styles.r3}`} />
      </div>
      <div className={`${styles.orb} ${styles.o1}`} />
      <div className={`${styles.orb} ${styles.o2}`} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} /> Propuesta Socialab × Mallplaza
        </div>
        <p className={styles.eyebrow}>Mallplaza Impulsa</p>
        <h1 className={styles.title}>
          Mallplaza, el<br />
          <span className={styles.grad}>laboratorio</span> de las<br />
          ciudades del futuro
        </h1>
        <p className={styles.sub}>
          Cada centro se convierte en un espacio vivo donde probar, escalar e implementar la innovación que genera valor para el negocio, los locatarios y las comunidades.
        </p>
        <div className={styles.ctaRow}>
          <a href="#componentes" className={styles.btnPrimary}>Ver la propuesta →</a>
          <a href="#alcance" className={styles.btnGhost}>Alcance anual</a>
        </div>
      </div>
    </section>
  )
}
