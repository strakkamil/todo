import React, { Component } from 'react'
import AppContext from '../../context'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Modal from '../Modal/Modal'
import MainView from '../MainView/MainView';
import CriticalTasks from '../CriticalTasks/CriticalTasks'
import ImportantTasks from '../ImportantTasks/ImportantTasks'
import OptionalTasks from '../OptionalTasks/OptionalTasks'
import styles from './App.module.scss'

const TYPES = {
  CRITICAL: 'krytyczne',
  IMPORTANT: 'wazne',
  OPTIONAL: 'opcjonalne'
}

class App extends Component {
  state = {
    critical: [
      {
        title: 'Wyjdź z psem',
        type: TYPES.CRITICAL,
        time: "2020-12-07",
        description: 'Burek musi na spacerek'
      },
      {
        title: 'Ogarnij reduxa',
        type: TYPES.CRITICAL,
        time: "2019-12-07",
        description: 'czas leci a tu contex api'
      }
    ],
    important: [
      {
        title: 'Umyj naczynia',
        type: TYPES.IMPORTANT,
        time: "2030-12-07",
        description: 'Nie no jeszcze są czyste, niektóre talerze'
      },
    ],
    optional: [
      {
        title: 'dodaj tu jakaś funkcjonalność',
        type: TYPES.OPTIONAL,
        time: "2020-12-21",
        description: 'albo zacznij coś nowego'
      },
    ],
    isModalOpen: false,
    activeOption: 'krytyczne',
  }

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }

  onChangeActiveOption = e => {
    this.setState({
      activeOption: e.target.value
    })
  }

  defaultCriticalActiveOption = () => {
    this.setState({
      activeOption: 'krytyczne'
    })
  }

  onClickAddTask = (e, item) => {
    e.preventDefault()

    switch (this.state.activeOption) {
      case 'krytyczne':
        this.setState(prevState => ({
          critical: [...prevState.critical, item]
        }))
        break
      case 'wazne':
        this.setState(prevState => ({
          important: [...prevState.important, item]
        }))
        break
      case 'opcjonalne':
        this.setState(prevState => ({
          optional: [...prevState.optional, item]
        }))
        break
      default:
        return null
    }

    this.defaultCriticalActiveOption()

    this.closeModal()
  }

  onClickRemoveTask = (title, active) => {
    switch (active) {
      case 'krytyczne':
        const criticalArray = [...this.state.critical]
        const newCritical = criticalArray.filter((item) => item.title !== title)
        this.setState({
          critical: [...newCritical]
        })
        break
      case 'wazne':
        const importantArray = [...this.state.important]
        const newImportant = importantArray.filter((item) => item.title !== title)
        this.setState({
          important: [...newImportant]
        })
        break
      case 'opcjonalne':
        const optionalArray = [...this.state.optional]
        const newOptional = optionalArray.filter((item) => item.title !== title)
        this.setState({
          optional: [...newOptional]
        })
        break
      default:
        return null
    }
  }

  render() {
    const { isModalOpen, activeOption } = this.state
    const contextElements = {
      ...this.state,
      openModal: this.openModal,
      closeModal: this.closeModal,
      onChangeActiveOption: this.onChangeActiveOption,
      onClickRemoveTask: this.onClickRemoveTask
    }
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <div className={styles.wrapper}>
            <Sidebar />
            <Route exact path='/' component={MainView} />
            <Route path='/critic' component={CriticalTasks} />
            <Route path='/important' component={ImportantTasks} />
            <Route path='/optional' component={OptionalTasks} />
            {isModalOpen && <Modal activeOption={activeOption} onClickAddTask={(e, item) => this.onClickAddTask(e, item)} />}
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
