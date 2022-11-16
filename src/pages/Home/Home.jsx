import { Skill } from '../Skill/Skill'
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>Gregory Fouchard | Front End Engineer</h1>
        <img src='./images/greg.jpg' alt='portfolio' className={styles.home} />
      </header>
      <section className={styles.skills}>
        <Skill />
      </section>
    </>
  )
}

export default Home