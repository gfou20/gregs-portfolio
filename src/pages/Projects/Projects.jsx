import Carousel from 'react-bootstrap/Carousel'

function Projects() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./images/90s-quiz.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>90s Quiz Game</h3>
          <p>An app that allows the users to select a quiz and answer a number of questions before time runs out.</p>
          <p>Javascript, HTML, CSS</p>
          <hr />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./images/get-pumped-tracker.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Get Pumped Tracker</h3>
          <p>An app that allows the user to track their fitness routines. The user is able to record how many sets/reps, the date of the workout as well as view other users fitness routines.</p>
          <p>MongoDB, Javascript, HTML, CSS</p>
          <hr />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./images/sneaker-collector.png'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sneaker Collector</h3>
          <p>An app that allows the user to add collected sneakers and track where these sneakers were purchased. User is able to edit sneaker price, location they were purchased and sneaker details.</p>
          <p>Postgres SQL, Django, Javascript, HTML, CSS</p>
          <hr />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Projects