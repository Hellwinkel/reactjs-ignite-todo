import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.scss'

interface TaskProps {
  id: string
  title: string
  isComplete: boolean
  onChangeTaskStatus: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({ id, title, isComplete, onChangeTaskStatus, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleChangeTaskStatus() {
    onChangeTaskStatus(id)
  }

  return (
    <div className={`${styles.task} ${isComplete ? styles.completed : null}`}>
      <button
        className={styles.taskCheckbox}
        type="button"
        title="Concluir tarefa"
        onClick={handleChangeTaskStatus}
      >
        <Check size={12} weight={'bold'} />
      </button>

      <p>{title}</p>

      <button
        className={styles.deleteTask}
        type="button"
        title="Apagar tarefa"
        onClick={handleDeleteTask}
      >
        <Trash size={18} />
      </button>
    </div>
  )
}