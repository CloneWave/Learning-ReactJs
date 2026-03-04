import styles from './Button.module.css'
const Button = (props) => {
  return (
    <div>
        <button className={styles.btn}>{props.btn}</button>
    </div>
  )
}

export default Button