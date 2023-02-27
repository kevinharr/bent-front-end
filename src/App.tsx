// npm modules 
import * as profileService from './services/profileService'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import BentList from './pages/BentList/BentList'
import * as bentService from './services/bentService'
import NewBent from './pages/NewBent/NewBent'


// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// stylesheets
import './App.css'

// types
import { User, Profile, Bent } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [bents, setBents] = useState([])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
        console.log("profile data", profileData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchProfiles()
  }, [user])

  useEffect(() => {
    const fetchAllBents = async () => {
      const data = await bentService.index()
      console.log('Bent Data:', data)
      console.log("hello bent data")
      setBents(data)
    }
    if (user) fetchAllBents()
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleAddBent = async (bentData) => {
    const newBent = await bentService.create(bentData)
    setBents([newBent, ...bents])
    navigate('/bents')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles
                profiles={profiles}
               />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bents"
          element={
            <ProtectedRoute user={user}>
              <BentList bents={bents}/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route path="/bents/new" element={
          <ProtectedRoute user={user}>
            <NewBent handleAddBent={handleAddBent} />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
