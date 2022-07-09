import { createContext, useState, useEffect, ReactNode } from 'react'
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as LogOut,
} from 'firebase/auth'
import { auth } from '../lib/firebase'

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

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  async function signOut() {
    await LogOut(auth)
  }

  const value = { currentUser, signInWithGoogle, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContextProvider, AuthContext }
