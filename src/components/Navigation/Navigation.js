import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

function Navigation() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li><NavLink to="/critic">krytyczne</NavLink></li>
        <li><NavLink to="/important">ważne</NavLink></li>
        <li><NavLink to="/optional">opcjonalne</NavLink></li>
      </ul>
    </div>
  )
}

export default Navigation