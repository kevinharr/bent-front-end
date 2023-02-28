// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import BentList from './pages/BentList/BentList'
import NewBent from './pages/NewBent/NewBent'
import EditBent from './pages/EditBent/EditBent'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import BentCard from './components/BentCard/BentCard'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as bentService from './services/bentService'

// stylesheets
import './App.css'

// types
import { User, Profile, Bent } from './types/models'
import { BentFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [bents, setBents] = useState<Bent[]>([])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

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

  useEffect((): void => {
    const fetchAllBents = async (): Promise<void> => {
      try {
        const bentData: Bent[] = await bentService.getAllBents()
        setBents(bentData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchAllBents()
  }, [user])

  const handleCreateBent = async (formData: BentFormData): 
  Promise<void> => {
    const newBent = await bentService.create(formData)
      setBents([newBent, ...bents])
      navigate('/bents')
  }

  const handleUpdateBent = async (bentData: BentFormData): Promise<void> => {
    const updatedBent = await bentService.update(bentData)
    setBents(bents.map((b) => bentData.id === b.id ? updatedBent : b))
    navigate('')
  }

  const handleDeleteBent = async (id: number) => {
    const deletedBent = await bentService.delete(id)
    setBents(bents.filter(b => b.id !== deletedBent.id))
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
                profiles={Profiles}
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
        <Route path="/bents/new" 
        element={
          <ProtectedRoute user={user}>
            <NewBent handleCreateBent={handleCreateBent} />
          </ProtectedRoute>
        } />
        <Route path="/bents/:id/edit" 
        element={
          <ProtectedRoute user={user}>
            <EditBent handleUpdateBent={handleUpdateBent} />
          </ProtectedRoute>
  } />
        <Route 
          path="/bents/:id" 
          element={
           <ProtectedRoute user={user}>
            <BentCard 
              user={user} 
              handleDeleteBent={handleDeleteBent} />
          </ProtectedRoute>
} />
      </Routes>
    </>
  )
}

export default App
