import AppContext from '../../context'
import Task from '../Task/Task'
import EmptyTasks from '../EmptyTasks/EmptyTasks'
import styles from './OptionalTasks.module.scss'

function OptionalTasks() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <p className={styles.heading}>opcjonalne</p>
          <div className={styles.tasks}>
            {context.optional.length === 0 ? <EmptyTasks /> : context.optional.map(({ title, type, time, description }) => (
              <Task key={title} title={title} type={type} time={time} description={description} />
            ))}
          </div>
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default OptionalTasks