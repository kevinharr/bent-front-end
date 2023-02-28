//styles
import styles from './BentList.module.css'

//types
import { Bent } from '../../types/models'

//components
import BentCard from '../../components/BentCard/BentCard'

interface BentListProps {
  bents: Bent[];
}

const BentList = (props: BentListProps): JSX.Element => {
  return (
    <main className={styles.main}>
      <h1>Here is a list of bents.</h1>
      {props.bents.length ?
        <div className={styles.container}>
          {props.bents.map(bent => (
          <BentCard key={bent.id} bent={bent} />
          ))}
      </div>
    :
      <p>No bents added</p>
  }
    </main>
  )
}

export default BentList