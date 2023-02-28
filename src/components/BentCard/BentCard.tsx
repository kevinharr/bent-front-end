import styles from './BentCard.module.css'
import { Link } from "react-router-dom"
import { Bent } from '../../types/models'

interface BentCardProps {
  bent: Bent;
}

const BentCard = (props: BentCardProps): JSX.Element => {
  const { bent } = props

  return (
    <>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{bent.workPreference}</h1>
            <h1>{bent.favoriteColor}</h1>
            <h1>{bent.favoriteMusic}</h1>
          </span>
        </header>
      </article>
    <span>
    
        <>
          <Link to={`/bents/${id}/edit`} state={bent}>Edit</Link>
          <button onClick={() => props.handleDeleteBlog(id)}>Delete</button>
        </>

     </span>
    
    </>
   
  )
}

export default BentCard