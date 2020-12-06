import AppContext from '../../context'
import Task from '../Task/Task'
import EmptyTasks from '../EmptyTasks/EmptyTasks'
import styles from './CriticalTasks.module.scss'

function CriticalTasks() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <p className={styles.heading}>krytyczne</p>
          <div className={styles.tasks}>
            {context.critical.length === 0 ? <EmptyTasks /> : context.critical.map(({ title, type, time, description }) => (
              <Task key={title} title={title} type={type} time={time} description={description} />
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default CriticalTasks