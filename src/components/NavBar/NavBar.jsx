import styles from './NavBar.module.css'

export function NavBar() {
  return (
    <nav>
      <ul className={styles.container}>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
    </nav>
  )
}