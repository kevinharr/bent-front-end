//styles
import styles from './BentList.module.css'

//types
import { Bent } from '../../types/models'

//components
import BentCard from '../../components/BentCard/BentCard'

interface BentListProps {
  bents: Bent[];
  handleDeleteBent: (id: number) => void;
}

const BentList = ({ bents, handleDeleteBent }: BentListProps): JSX.Element => {
  return (
    <main className={styles.main}>
      <h1>Here is a list of bents for the meeting.</h1>
      {bents.length ? (
        <div className={styles.container}>
          {bents.map(bent => (
          <BentCard 
            key={bent.id} 
            bent={bent}
            handleDeleteBent={handleDeleteBent} 
          />
        ))}
      </div>
      ) : (
      <p>No bents added</p>
      )}
    </main>
  )
}

export default BentList