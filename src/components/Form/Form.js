import React, { Component } from 'react'
import styles from './Form.module.scss'

class Form extends Component {
  state = {
    title: '',
    time: '',
    description: '',
    type: ''
  }

  handleOnChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      type: this.props.activeOption
    })
  }

  render() {
    return (
      <div className={styles.wrapper} >
        <form className={styles.form} onSubmit={(e) => this.props.onClickAddTask(e, this.state)}>
          <input
            type="text"
            name="title"
            placeholder="tytuł"
            value={this.state.title}
            onChange={this.handleOnChangeInput}
          />
          <label htmlFor="date">termin do: </label>
          <input
            name="time"
            value={this.state.date}
            onChange={this.handleOnChangeInput}
            type="date"
          />
          <textarea
            placeholder="opis..."
            value={this.state.description}
            onChange={this.handleOnChangeInput}
            name="description"
            cols="20"
            rows="5" />
          <button type="submit">dodaj</button>
        </form>
      </div>
    )
  }
}

export default Form