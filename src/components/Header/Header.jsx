import { formatDate } from '../../helpers/formateDate'
import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Good Morning</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  )
}