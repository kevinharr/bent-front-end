import styles from './BentCard.module.css'
import { useParams, Link } from "react-router-dom"
import AuthorInfo from "../AuthorInfo/AuthorInfo"

// Components
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const BentCard = ({ bent }) => {
  return (
    <>
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
    <span>
      <AuthorInfo content={bent} />

      {bent.author._id === props.user.profile &&
        <>
          <Link to={`/bents/${id}/edit`} state={bent}>Edit</Link>
          <button onClick={() => props.handleDeleteBlog(id)}>Delete</button>
        </>
      }
     </span>
    
    </>
   
  )
}

export default BentCard