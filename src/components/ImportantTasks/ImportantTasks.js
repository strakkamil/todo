import AppContext from '../../context'
import Task from '../Task/Task'
import EmptyTasks from '../EmptyTasks/EmptyTasks'
import styles from './ImportantTasks.module.scss'

function ImportantTasks() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <p className={styles.heading}>ważne</p>
          <div className={styles.tasks}>
            {context.important.length === 0 ? <EmptyTasks /> : context.important.map(({ title, type, time, description }) => (
              <Task key={title} title={title} type={type} time={time} description={description} />
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default ImportantTasks