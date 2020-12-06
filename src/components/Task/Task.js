import React, { Component } from 'react'
import AppContext from '../../context'
import styles from './Task.module.scss'

class Task extends Component {
  state = {
    isDone: false
  }

  toggleDoneClass = () => {
    this.setState({
      isDone: !this.state.isDone
    })
  }

  render() {
    const { isDone } = this.state
    return (
      <AppContext.Consumer>
        {({ onClickRemoveTask }) => (
          <div
            className={styles.wrapper}
            onClick={this.toggleDoneClass}
          >
            {isDone && <div className={styles.done}>zrobione</div>}
            <div className={styles.change}>
              <button onClick={() => onClickRemoveTask(this.props.title, this.props.type)}>usuń</button>
            </div>
            <p className={styles.title}>{this.props.title}</p>
            <p className={styles.type}>{this.props.type}</p>
            <p className={styles.time}>{this.props.time}</p>
            <span className={styles.description}>{this.props.description}</span>
          </div>
        )
        }
      </AppContext.Consumer>
    )
  }
}

export default Task