import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.container}>
      <Link to='/'><img src='./images/greg.jpg' alt='portfolio' /></Link>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><a href='./images/Gregory_Fouchard_Resume.pdf' download>Resume</a></li>
        <li><Link to='/projects'>Projects</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar