import { createContext, useState, useEffect, ReactNode } from 'react'
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as LogOut,
} from 'firebase/auth'
import { auth } from '../lib/firebase'
import axios from 'axios'

interface AuthContextProviderProps {
  children: ReactNode
}

const AuthContext = createContext<any>({})

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<any>({})

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  async function createUserData() {
    const user = auth.currentUser
    await axios.post('/api/addUser', {
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      countVotes: 0,
    })
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)

    await createUserData()
  }

  async function signOut() {
    await LogOut(auth)
  }

  const value = { currentUser, signInWithGoogle, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContextProvider, AuthContext }
