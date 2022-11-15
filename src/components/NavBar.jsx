import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <Link to='/'>Gregory Fouchard</Link>
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