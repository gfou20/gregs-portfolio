import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.header}>
      <h1>Gregory Fouchard | Front End Engineer</h1>
      <img src='./images/greg.jpg' alt='portfolio' className={styles.home} />
    </div>
  )
}

export default Home