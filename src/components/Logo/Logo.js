import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link className={styles.logo} to="/">todo</Link>
  )
}

export default Logo