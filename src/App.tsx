import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'
import { EmptyList } from './components/EmptyList'

import styles from './App.module.scss'

import './global.scss'

interface Task {
  id: string
  title: string
  isComplete: boolean
}

const tasks: Task[] = []

export function App() {
  const [taskList, setTaskList] = useState(tasks)

  function createNewTask(title: string) {
    const newTask = {
      id: uuidv4(),
      title,
      isComplete: false
    }

    setTaskList([...taskList, newTask])
  }

  function changeTaskStatus(id: string) {
    const updatedTaskList = taskList.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete
      }

      return task
    })

    setTaskList(updatedTaskList)
  }

  function deleteTask(id: string) {
    const updatedTaskList = taskList.filter(task => task.id !== id)

    setTaskList(updatedTaskList)
  }

  function showCompletedTasks() {
    const taskCount = taskList.length
    const completedTaks = taskList.reduce((acc: any, current) => {
      return current.isComplete ? acc + 1 : acc
    }, 0)

    if (!taskCount) return 0

    return `${completedTaks} de ${taskCount}`
  }

  const taskContent = taskList.map(task => (
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      isComplete={task.isComplete}
      onDeleteTask={deleteTask}
      onChangeTaskStatus={changeTaskStatus}
    />))

  return (
    <>
      <Header />
      <NewTask onCreateNewTask={createNewTask} />
      <div className={styles.tasks}>
        <header>
          <p className={styles.tasksCount}>
            <strong>Tarefas criadas</strong>{' '}
            <span>{taskList.length}</span>
          </p>
          <p className={styles.tasksDone}>
            <strong>Concluídas</strong>{' '}
            <span>{showCompletedTasks()}</span>
          </p>
        </header>
        <div className={styles.tasksWrapper}>
          {taskList.length ? taskContent : <EmptyList />}
        </div>
      </div>
    </>
  )
}