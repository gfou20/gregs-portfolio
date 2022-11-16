import styles from './Contact.module.css'

function Contact() {
  return (
    <>
      <main className={styles.contact}>
        <h1>Contact Me</h1>
        <p>Please reach out for further information via <a href='mailto:gfouchard20@outlook.com.com'>email</a>.</p>
        <p>You can view my <a href='https://www.linkedin.com/in/gfouchard/' target='_blank' rel='noreferrer'>LinkedIn</a> or <a href='https://github.com/gfou20' target='_blank' rel='noreferrer'>Github</a> profiles for more.</p>
      </main>
    </>
  )
}

export default Contact