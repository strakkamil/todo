import AppContext from '../../context'
import styles from './NewTask.module.scss'

function NewTask() {
  return (
    <AppContext.Consumer>
      {({ openModal }) => (
        <div className={styles.wrapper}>
          <p>dodaj taska</p>
          <div onClick={openModal} className={styles.add}>+</div>
        </div>
      )}
    </AppContext.Consumer>

  )
}

export default NewTask