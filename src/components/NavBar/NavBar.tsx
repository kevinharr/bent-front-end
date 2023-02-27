import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/icons/bent_icon.jpg'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

// const NavBar = ({ user, handleLogout }) => {

//   const publicLinks = (
//     <ul>
//      <li><NavLink className={styles.NavLink} to="/login">Log In</NavLink></li>
//      <li><NavLink className={styles.NavLink} to="/signup">Sign Up</NavLink></li>
//     </ul>
//   )

//   const protectedLinks = (
//     <ul>
//       <li>Welcome, {user.name}</li>
//       <li><NavLink className={styles.NavLink} to="/change-password">Change Password</NavLink></li>
//       <li><NavLink className={styles.NavLink} to="/bents">BENTS</NavLink></li>
//       <li><NavLink className={styles.NavLink} to="/bents/new">NEW BENT</NavLink></li>
//       <li><NavLink className={styles.NavLink} to="" onClick={handleLogout}>LOG OUT</NavLink></li>
//     </ul>
//   )

//   return (
//     <nav className={styles.container}>
//       <NavLink to={'/'}><img src={Logo} alt="A magnet" /></NavLink>
//       {user ? protectedLinks : publicLinks}
//     </nav>
//   )
// }
const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      {user ?
        <ul>
          <li><NavLink className={styles.flask} to={'/'}><img src={Logo} alt="A magnet" /></NavLink></li>
          <li>Welcome, {user.name}</li>
          {/* <li><NavLink className={styles.NavLink} to="/profiles">Profiles</NavLink></li> */}
          <li><NavLink className={styles.NavLink} to="/change-password">Change Password</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/bents">BENTS</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/bents/new">NEW BENT</NavLink></li>
          <li><NavLink className={styles.NavLink} to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink className={styles.flask} to={'/'}><img src={Logo} alt="A magnet" /></NavLink></li>
          <li><NavLink className={styles.NavLink} to="/login">Log In</NavLink></li>
          <li><NavLink className={styles.NavLink} to="/signup">Sign Up</NavLink></li>
        </ul>
      }
      {/* return (
        <nav className={styles.container}>
          <NavLink to={'/'}><img src={Logo} alt="A magnet" /></NavLink>
        </nav>
      ) */}
    </nav>
  )
}

export default NavBar
