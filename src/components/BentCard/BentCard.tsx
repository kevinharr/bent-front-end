import { Link } from "react-router-dom"
import styles from './BentCard.module.css'

// Components
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BentCard = ({ bent }) => {
  return (
    <Link to={`/bents/${bent._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>Testing bent card</h1>
            <h1>{bent.workPreference}</h1>
            <h1>{bent.favoriteColor}</h1>
            <h1>{bent.favoriteMusic}</h1>
          </span>
        </header>
      </article>
    </Link>
  )
}

export default BentCard