import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { User } from '../components/User'
import { Aside } from '../components/Aside'

const TopUsers: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Top Users</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto my-6 grid grid-cols-[1fr_768px_1fr] gap-6">
          <Nav />
          <main className="flex flex-col gap-6">
            <User styleProps />
            <User styleProps />
            <User styleProps />
            <User styleProps />
            <User styleProps />
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default TopUsers
