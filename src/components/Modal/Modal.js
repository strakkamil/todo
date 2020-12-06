import AppContext from '../../context'
import Radio from '../Radio/Radio'
import Form from '../Form/Form'
import styles from './Modal.module.scss'

function Modal({ onClickAddTask, activeOption }) {
  return (
    <AppContext.Consumer>
      {({ closeModal }) => (
        <div className={styles.wrapper}>
          <button onClick={closeModal} className={styles.close}>x</button>
          <p className={styles.heading}>dodaj taska</p>
          <Radio />
          <Form onClickAddTask={onClickAddTask} activeOption={activeOption} />
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default Modal