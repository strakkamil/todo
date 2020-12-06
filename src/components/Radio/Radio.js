import styles from './Radio.module.scss'
import AppContext from '../../context'

function Radio() {
  return (
    <AppContext.Consumer>
      {({ onChangeActiveOption }) => (
        <div className={styles.wrapper}>
          <form onChange={onChangeActiveOption} className={styles.form}>
            <label
              className={styles.radio}
            >
              krytyczne
            <input
                className={styles.input}
                type="radio"
                id="critic"
                value="krytyczne"
                name="type"
                defaultChecked />
              <div
                className={styles.radioButton}
              />
            </label>
            <label
              className={styles.radio}
            >
              ważne
            <input
                className={styles.input}
                type="radio"
                id="important"
                value="wazne"
                name="type" />
              <div
                className={styles.radioButton}
              />
            </label>
            <label
              className={styles.radio}
            >
              opcjonalne
            <input
                className={styles.input}
                type="radio"
                id="optional"
                value="opcjonalne"
                name="type" />
              <div
                className={styles.radioButton}
              />
            </label>
          </form>
        </div>
      )}
    </AppContext.Consumer>

  )
}

export default Radio