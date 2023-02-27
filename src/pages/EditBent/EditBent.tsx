import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditBent.module.css'

const EditBent = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateBent(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Bent</h1>
        <label htmlFor="work-input">What time of day do you work best?</label>
        <select
          required
          name="work"
          id="work-input"
          value={form.workPreference}
          onChange={handleChange}
        >
          <option value="Early Bird">Early Bird</option>
          <option value="Night Owl">Night Owl</option>
        </select>
        <label htmlFor="color-input">What is your favorite color?</label>
        <select
          required
          name="color"
          id="color-input"
          value={form.favoriteColor}
          onChange={handleChange}
        >
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Violet">Violet</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
        </select>
        <label htmlFor="music-input">What is your favorite genre of music?</label>
        <select
          required
          name="music"
          id="music-input"
          value={form.favoriteMusic}
          onChange={handleChange}
        >
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="Rhythm and Blues">Rhythm and Blues</option>
          <option value="Jazz">Jazz</option>
          <option value="Country">Country</option>
          <option value="Blues">Blues</option>
          <option value="Electronic Dance Music">Electronic Dance Music</option>
          <option value="Classical">Classical</option>
          <option value="Heavy Metal">Heavy Metal</option>
          <option value="Alternative">Alternative</option>
          <option value="Reggae">Reggae</option>
          <option value="Funk">Funk</option>
          <option value="Folk">Folk</option>
          <option value="Disco">Disco</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditBent