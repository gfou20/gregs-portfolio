import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div>
        <header className={styles.main}>
          <h2>Gregory Fouchard</h2>
          <h3>Software Engineer</h3>
          <img src="./images/gear.png" alt="gear" className={styles.gear} />
          <Link to="/about">
            <img
              src="./images/greg.jpg"
              alt="portfolio"
              className={styles.home}
            />
          </Link>
        </header>
      </div>
    </>
  );
}

export default Home;
