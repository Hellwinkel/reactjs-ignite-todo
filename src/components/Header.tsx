import styles from './Header.module.scss'

import todoLogo from '../assets/images/ignite-todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} />
    </header>
  )
}