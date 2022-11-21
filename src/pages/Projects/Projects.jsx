import Carousel from 'react-bootstrap/Carousel'
import styles from './Projects.module.css'

function Projects() {
  return (
    <div className={styles.projects}>
      <Carousel fade>
        <Carousel.Item className={styles.projects}>
          <a href='https://90s-cartoon-quiz.netlify.app/'><img
          className="d-block w-700"
          src='./images/90s-quiz.jpg'
          alt="First slide"
          /></a>
          <Carousel.Caption className={styles.captions}>
            <h3>90s Quiz Game</h3>
            <p>An app that allows the users to select a quiz and answer a number of questions before time runs out.</p>
            <hr />
            <p>Javascript, HTML, CSS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.projects}>
          <a href='https://get-pumped-tracker.fly.dev/'><img
          className="d-block w-700"
          src='./images/get-pumped-tracker.jpg'
          alt="Second slide"
          /></a>
          <Carousel.Caption className={styles.captions}>
            <h3>Get Pumped Tracker</h3>
            <p>An app that allows the user to track their fitness routines including sets/reps and date of the workout.</p>
            <hr />
            <p>MongoDB, Javascript, HTML, CSS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.projects}>
          <a href='https://sneaker-collector.herokuapp.com/'><img
          className="d-block w-700"
          src='./images/sneaker-collector.png'
          alt="Third slide"
          /></a>
          <Carousel.Caption className={styles.captions}>
            <h3>Sneaker Collector</h3>
            <p>An app that allows the user to add and track purchased sneakers as well as edit sneaker details.</p>
            <hr />
            <p>PostgresSQL, Django, Javascript, HTML, CSS</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects