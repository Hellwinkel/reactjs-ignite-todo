import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from './NewTask.module.scss'

interface NewTaskProps {
  onCreateNewTask: (title: string) => void
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(newTaskText)

    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setNewTaskText(event.target.value)
  }

  function handleInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Sua tarefa precisa de um nome')
  }

  const isNewTaskEmpty = !newTaskText.trim().length

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        onInvalid={handleInvalidTask}
        value={newTaskText}
      />
      <button
        className={styles.createButton}
        type="submit"
        disabled={isNewTaskEmpty}
      >
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}