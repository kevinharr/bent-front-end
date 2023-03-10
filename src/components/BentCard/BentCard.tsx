import { Link, useParams } from "react-router-dom"
import { Bent } from '../../types/models'
import styles from './BentCard.module.css'

interface BentCardProps {
  bent: Bent;
  handleDeleteBent: (id: number) => void;
}

const BentCard = (props: BentCardProps): JSX.Element => {
  const { bent } = props;
  const {id } = useParams<{ id: string }>();

  return (
    <article className={styles.container}>
      <header>
        <span>
          <h1>Bent Card Test</h1>
          <h1>{bent.workPreference}</h1>
          <h1>{bent.favoriteColor}</h1>
          <h1>{bent.favoriteMusic}</h1>
        </span>
      </header>
        <>
          <Link to={`/bents/${id}/edit`} state={bent}>
            <button className={styles.editButton}>Edit</button>
          </Link>
          <button
            className={styles.deleteButton}
            onClick={() => props.handleDeleteBent(bent.id)}
            >Delete
          </button>
        </>
    </article>
  )
}

export default BentCard