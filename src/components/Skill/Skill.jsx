import styles from './Skill.module.css'

export function Skill() {
  return(
    <div className={styles.container}>
      <h1>Tech Skills</h1>
      <img className={styles.img} src="icons/react.svg" alt="react-logo" />
      <img className={styles.img} src="icons/javascript.svg" alt="javascript-logo" />
    </div>

  )
}