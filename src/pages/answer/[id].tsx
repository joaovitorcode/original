import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { Answer } from '../../components/Answer'
import { Aside } from '../../components/Aside'

const AnswerPage: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Answer: {router.query.id}</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto my-6 grid grid-cols-[1fr_768px_1fr] gap-6">
          <Nav />
          <main className="flex flex-col gap-6">
            <Answer />
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default AnswerPage
