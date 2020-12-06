import CriticalTasks from '../CriticalTasks/CriticalTasks'
import ImportantTasks from '../ImportantTasks/ImportantTasks'
import OptionalTasks from '../OptionalTasks/OptionalTasks'
import styles from './MainView.module.scss'

function MainView() {
  return (
    <div className={styles.wrapper}>
      <CriticalTasks />
      <ImportantTasks />
      <OptionalTasks />
    </div>
  )
}

export default MainView