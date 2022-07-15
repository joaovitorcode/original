import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Aside } from '../components/Aside'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Danger: NextPage = () => {
  const { currentUser } = useAuth()

  async function handleSubmit() {
    await axios.delete(
      `http://localhost:3000/api/removeUserById/${currentUser?.uid}`
    )
  }

  return (
    <div>
      <Head>
        <title>Top Users</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-[1fr_768px] xl:grid-cols-[1fr_768px_1fr] sm:gap-6 top-16">
          <Nav className="hidden lg:inline-block" />
          <main className="flex flex-col gap-6">
            <a
              onClick={handleSubmit}
              className="hover:cursor-pointer block text-center py-3 bg-red-500 hover:bg-white dark:hover:bg-slate-900 text-white hover:text-red-500 border border-red-500 rounded transition-colors mb-6"
            >
              Delete User
            </a>
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default Danger
