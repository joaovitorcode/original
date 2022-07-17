import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Aside } from '../components/Aside'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
import { FullPageLoader } from '../components/FullPageLoader'

const Danger: NextPage = () => {
  const { currentUser, removeUser, newAuthenticate } = useAuth()
  const router = useRouter()
  const [isAuthenticated, isLoading] = useAuthState(auth)

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/')
    }
  }, [isAuthenticated, isLoading])

  if (!isAuthenticated || isLoading) {
    return <FullPageLoader />
  }

  async function handleSubmit() {
    await axios.delete(
      `http://localhost:3000/api/removeUserById/${currentUser?.uid}`
    )

    await newAuthenticate()

    await removeUser()
  }

  return (
    <div>
      <Head>
        <title>Danger</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-[1fr_768px] xl:grid-cols-[1fr_768px_1fr] sm:gap-6 top-16">
          <Nav className="hidden lg:inline-block" />
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-6 shadow-md">
              <header>
                <strong className="text-lg font-semibold dark:text-white">
                  This action cannot be undone
                </strong>
              </header>
              <main>
                <p className="text-slate-600 dark:text-slate-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ornare ligula id dictum aliquet.
                </p>
              </main>
              <footer className="flex justify-end">
                <a
                  onClick={handleSubmit}
                  className="hover:cursor-pointer block text-center p-3 bg-red-500 hover:bg-white dark:hover:bg-slate-900 text-white hover:text-red-500 border border-red-500 rounded transition-colors"
                >
                  Delete User
                </a>
              </footer>
            </div>
          </div>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default Danger
