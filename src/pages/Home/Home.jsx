import { Link } from "react-router-dom"
import { Skill } from '../../components/Skill/Skill'
import styles from './Home.module.css'

function Home() {
  return (
    <div>
      <header className={styles.main}>
        <h2>Gregory Fouchard</h2>
        <h3>Software Engineer</h3>
        <img src='./images/gear.png' alt='gear' className={styles.gear} />
        <Link to='/about'><img src='./images/greg.jpg' alt='portfolio' className={styles.home} /></Link>
      </header>
      <span className={styles.c1}></span>
      <span className={styles.c2}></span>
      <span className={styles.c3}></span>
      <section className={styles.skills}>
        <Skill />
      </section>
    </div>
  )
}

export default Home