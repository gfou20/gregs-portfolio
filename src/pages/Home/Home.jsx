import { Link } from "react-router-dom"
import { Skill } from '../Skill/Skill'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.c1}>
      <header className={styles.main}>
        <h1>Gregory Fouchard</h1>
        <h2>Software Engineer</h2>
        <Link to='/about'><img src='./images/greg.jpg' alt='portfolio' className={styles.home} /></Link>
      </header>
      <section className={styles.skills}>
        <Skill />
      </section>
    </div>
  )
}

export default Home