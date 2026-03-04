import styles from "./Header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
        <h1>CSS School</h1>
        <button className={styles.btn}>Sign Up</button>
    </div>
  )
}

export default Header