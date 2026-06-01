import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        Mallplaza <span>Impulsa</span>
      </div>
      <ul className={styles.links}>
        <li><a href="#objetivos">Objetivos</a></li>
        <li><a href="#componentes">Componentes</a></li>
        <li><a href="#laboratorio">Laboratorio</a></li>
        <li><a href="#beneficios">Beneficios</a></li>
        <li><a href="#alcance">Alcance</a></li>
      </ul>
    </nav>
  )
}
