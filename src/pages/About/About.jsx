import styles from './About.module.css'

function About() {
  return (
    <>
      <main className={styles.about}>
        <h1>About</h1>
        <img src='./images/greg.jpg' alt='portfolio' />
        <p>I am a driven software engineer using my experience in customer service and health administration to deliver a smooth and impactful user-friendly experience. I thrive in dynamic work environments and am always looking for new opportunities to learn and grow.</p>
        <section className={styles.interests}>
          <h2>Interests</h2>
          <ul>
            <li>Coding</li>
            <li>Gaming</li>
            <li>Exercising</li>
            <li>Reading manga/Watching anime</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default About