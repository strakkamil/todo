import styles from './Sidebar.module.scss'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import NewTask from '../NewTask/NewTask'

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Navigation />
      <NewTask />
    </div>
  )
}

export default Sidebar