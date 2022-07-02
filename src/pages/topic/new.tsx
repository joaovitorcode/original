import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { Write } from '../../components/Write'
import { Aside } from '../../components/Aside'

const NewTopicPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>New Topic</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto my-6 grid grid-cols-[1fr_768px_1fr] gap-6">
          <Nav />
          <main className="flex flex-col gap-6">
            <span className="text-slate-800 font-medium uppercase">
              Write a Topic
            </span>
            <Write />
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default NewTopicPage
