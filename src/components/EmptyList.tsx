import styles from './EmptyList.module.scss'

import EmptyListIcon from '../assets/images/empty-list-icon.svg'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={EmptyListIcon} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}