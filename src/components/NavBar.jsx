import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.container}>
      <ul>
        <li><Link to='/'><img src='./images/home.png' alt='home-icon' /></Link></li>
        <li><Link to='/about'><img src='./images/about.png' alt='about-icon' /></Link></li>
        <li><Link to='/contact'><img src='./images/contact.png' alt='contact-icon' /></Link></li>
        <li><a href='./images/Gregory_Fouchard_Resume.pdf' download><img src='./images/resume.png' alt='resume-icon' /></a></li>
        <li><Link to='/projects'><img src='./images/projects.png' alt='projects-icon' /></Link></li>
      </ul>
    </nav>
  )
}

export default NavBar