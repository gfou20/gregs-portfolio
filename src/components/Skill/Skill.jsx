import './Skill.module.css'
import styles from './Skill.module.css'

export function Skill() {
  return(
    <>
      <div className={styles.set1}>
        <i class="devicon-react-original-wordmark"></i>
        <i class="devicon-javascript-plain"></i>
      </div>
      <div className={styles.set2}>
        <i class="devicon-python-plain"></i>
        <i class="devicon-django-plain-wordmark"></i>
      </div>
      <div className={styles.set3}>
        <i class="devicon-html5-plain-wordmark"></i>
        <i class="devicon-css3-plain-wordmark"></i>
      </div>
      <div className={styles.set4}>
      <i class="devicon-mongodb-plain-wordmark"></i>
      <i class="devicon-postgresql-plain-wordmark"></i>
      </div>
      <div className={styles.set5}>
      <i class="devicon-express-original-wordmark"></i>
      <i class="devicon-nodejs-plain-wordmark"></i>
      </div>
      <div className={styles.set6}>
        <i class="devicon-bootstrap-plain-wordmark"></i>
        <i class="devicon-docker-plain-wordmark"></i>
      </div>
    </>
  )
}