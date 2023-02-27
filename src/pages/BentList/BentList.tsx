import styles from './BentList.module.css'
import BentCard from '../../components/BentCard/BentCard'
import { Bent } from '../../types/models'

const BentList = (props) => {
  return (
    <main className={styles.container}>
      {props.bents.map((bent: Bent) => (
        <BentCard key={bent._id} bent={bent} />
      ))}
      Bent List
    </main>
  )
}

export default BentList